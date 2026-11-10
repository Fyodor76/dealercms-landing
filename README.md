ssh -o IdentitiesOnly=yes -i ~/.ssh/dealercms [root@217.12.37.51](mailto:root@217.12.37.51)

# lumirix.ru — Деплой на VPS

## Архитектура деплоя

GitHub Actions → SSH на сервер → `git pull` → генерация `.env` из секретов → `docker compose build` → `docker compose up`

Реестр Docker не используется. Образ собирается прямо на сервере.

`Dockerfile` и `docker-compose.yml` лежат в самом репозитории и приезжают на сервер вместе с `git pull` — руками их на VPS создавать не нужно.

---

## Настройка VPS (один раз)

### 1. Установить Docker и Git

```bash
apt update
apt install -y docker.io docker-compose-v2 git
docker --version && docker compose version && git --version
```



### 2. Добавить пользователя в группу docker

Чтобы запускать docker без sudo:

```bash
usermod -aG docker $USER
newgrp docker
```



### 3. Создать SSH deploy key для приватного репозитория

```bash
ssh-keygen -t ed25519 -C "deploy@lumirix.ru" -f ~/.ssh/deploy_key -N ""
```

Вывести публичный ключ:

```bash
cat ~/.ssh/deploy_key.pub
```

Добавить его в GitHub репозиторий:
**GitHub → репозиторий → Settings → Deploy keys → Add deploy key**

- Title: `VPS deploy key`
- Key: вставить содержимое `deploy_key.pub`
- Allow write access: **не нужно** (только чтение)



### 4. Настроить SSH config для использования deploy key

```bash
nano ~/.ssh/config
```

Содержимое:

```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/deploy_key
  StrictHostKeyChecking no
```



### 5. Клонировать репозиторий

```bash
git clone git@github.com:Fisher-Development/dealercms-landing.git /srv/dealercms.ru
```

`Dockerfile` и `docker-compose.yml` уже лежат в репозитории — отдельно создавать их на сервере не нужно, они подтянутся вместе с `git pull` при каждом деплое.

### 6. Создать `.env` на сервере (для первого ручного запуска)

При деплое через GitHub Actions файл `.env` генерируется автоматически из секретов (см. ниже), поэтому этот шаг нужен только если ты хочешь собрать и запустить контейнер руками до первого деплоя:

```bash
cd /srv/dealercms.ru
cp .env.example .env
nano .env
```

Заполни `UNISENDER_API_KEY`, `MAIL_FROM`, `MAIL_TO` (см. раздел [Переменные окружения](#переменные-окружения)).

---



## Настройка GitHub Actions



### Секреты (Settings → Secrets and variables → Actions)


| Имя секрета           | Значение                                                                                                    |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `HOST`                | IP-адрес сервера                                                                                            |
| `USER`                | пользователь SSH (обычно `root`)                                                                            |
| `SSH_PRIVATE_KEY`     | содержимое файла `~/.ssh/id_rsa` или `~/.ssh/id_ed25519` с **рабочей машины**, которым ты входишь на сервер |
| `NEXT_PUBLIC_API_URL` | обычно пусто (форма бьёт в `/api/contact`)                                                                  |
| `UNISENDER_API_KEY`   | API-ключ Unisender Go                                                                                       |
| `MAIL_FROM`           | отправитель на подтверждённом домене, напр. `noreply@dealercms.ru`                                          |
| `MAIL_FROM_NAME`      | имя отправителя, напр. `DealerCMS`                                                                          |
| `MAIL_TO`             | куда падают заявки, напр. `fydorzbinyakov@gmail.com`                                                        |


> `SSH_PRIVATE_KEY` — это ключ для входа GitHub Actions **на сервер** (не deploy key для GitHub). Это тот же ключ, которым ты сам заходишь по SSH. Публичная часть этого ключа должна быть в `~/.ssh/authorized_keys` на сервере.



### Workflow файл

Файл `.github/workflows/main.yml` уже лежит в репозитории:

```yaml
name: Deploy

on:
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: SSH into server and deploy
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /srv/dealercms.ru
            git pull origin main

            cat > .env <<ENVEOF
            NEXT_PUBLIC_API_URL=${{ secrets.NEXT_PUBLIC_API_URL }}
            UNISENDER_API_KEY=${{ secrets.UNISENDER_API_KEY }}
            MAIL_FROM=${{ secrets.MAIL_FROM }}
            MAIL_FROM_NAME=${{ secrets.MAIL_FROM_NAME }}
            MAIL_TO=${{ secrets.MAIL_TO }}
            ENVEOF

            docker compose build
            docker compose up -d
            docker image prune -a -f --filter "until=1h"
```

На каждый деплой файл `.env` на сервере перезаписывается свежими значениями секретов — редактировать его руками не нужно (кроме самого первого запуска, см. шаг 6 выше).

---



## Переменные окружения

Список переменных смотри в `[.env.example](./.env.example)` — скопируй его в `.env` для локальной разработки:

```bash
cp .env.example .env
```


| Переменная            | Описание                                                                 |
| --------------------- | ------------------------------------------------------------------------ |
| `NEXT_PUBLIC_API_URL` | обычно пусто — форма шлёт на `/api/contact`                              |
| `UNISENDER_API_KEY`   | API-ключ Unisender Go                                                    |
| `MAIL_FROM`           | `noreply@dealercms.ru` (домен должен быть подтверждён в Unisender Go)    |
| `MAIL_FROM_NAME`      | `DealerCMS`                                                              |
| `MAIL_TO`             | `fydorzbinyakov@gmail.com`                                               |


> Отправка через [Unisender Go Web API](https://godocs.unisender.ru/web-api-ref) (`email/send`). Домен `dealercms.ru` и домен ссылок `email.dealercms.ru` настраиваются в кабинете Unisender Go.

---



## Проверка после первого деплоя

```bash
cd /srv/lumirix.ru

# Статус контейнера
docker compose ps

# Логи
docker compose logs -f
```

---



## Структура ключей — итог


| Ключ                   | Где лежит         | Зачем                                                     |
| ---------------------- | ----------------- | --------------------------------------------------------- |
| `~/.ssh/deploy_key`    | на VPS            | чтобы VPS мог делать `git pull` из приватного GitHub репо |
| `~/.ssh/id_*/ваш_ключ` | на рабочей машине | чтобы GitHub Actions мог зайти на VPS по SSH              |


---



## Настройка Nginx и SSL



### 1. Установить Nginx и Certbot

```bash
apt install -y nginx certbot python3-certbot-nginx
```



### 2. Создать конфиг Nginx

```bash
nano /etc/nginx/sites-available/dealercms.ru
```

Содержимое:

```nginx
server {
    listen 80;
    server_name dealercms.ru www.dealercms.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```



### 3. Включить сайт

```bash
ln -s /etc/nginx/sites-available/dealercms.ru /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```



### 4. Выпустить SSL-сертификат

> Перед этим шагом оба домена должны вести на IP сервера. Проверить: `dig lumirix.ru +short`

```bash
certbot --nginx \
  -d dealercms.ru -d www.dealercms.ru \
  --email info@dealercms.ru \
  --agree-tos \
  --no-eff-email \
  --redirect
```

Certbot сам обновит конфиг Nginx, добавит SSL и редиректы с HTTP и с www.

### 5. Проверить автообновление сертификата

```bash
certbot renew --dry-run
```



### 6. Включить HTTP/2

После certbot в конфиге появится блок с `listen 443 ssl;` (Certbot сам добавляет SSL-сертификаты в существующий или новый server-блок). Открываем конфиг и правим его:

```bash
nano /etc/nginx/sites-available/dealercms.ru
```

Nginx версии 1.25.1+ (проверить: `nginx -v`) — старый синтаксис `listen 443 ssl http2;` устарел, нужна отдельная директива `http2 on;`:

```nginx
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name dealercms.ru www.dealercms.ru;

    # ... остальные строки, добавленные certbot (ssl_certificate и т.д.) ...
}
```

Nginx старее 1.25.1 — используем совмещённый синтаксис прямо в `listen`:

```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name dealercms.ru www.dealercms.ru;

    # ... остальные строки, добавленные certbot ...
}
```

Проверяем конфиг и перезагружаем Nginx:

```bash
nginx -t && systemctl reload nginx
```

Проверить, что HTTP/2 действительно работает:

```bash
curl -I --http2 -s https://dealercms.ru | head -n 1
```

Если в ответе `HTTP/2 200` — всё включено.