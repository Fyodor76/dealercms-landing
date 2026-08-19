import Link from "next/link";
import Logo from "../components/Logo";
import {
  LEGAL_ADDRESS,
  LEGAL_ENTITY_FULL,
  LEGAL_ENTITY_SHORT,
  LEGAL_INN,
  LEGAL_OGRN,
  LEGAL_POLICY_DATE,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_URL,
} from "../lib/site";

export const metadata = {
  title: "Политика обработки персональных данных",
  description:
    "Политика обработки персональных данных сайта DealerCMS: оператор, состав данных, цели обработки и контакты.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:h-20 sm:px-6">
          <Link href="/">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            На главную
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight">
          Политика обработки персональных данных
        </h1>
        <p className="mt-4 text-sm text-muted">
          Дата публикации: {LEGAL_POLICY_DATE}
        </p>

        <div className="prose-policy mt-10 space-y-6 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика определяет порядок обработки и защиты
              персональных данных пользователей сайта{" "}
              <a href={SITE_URL} className="text-accent hover:underline">
                {SITE_URL.replace(/^https?:\/\//, "")}
              </a>{" "}
              (далее — «Сайт»).
            </p>
            <p className="mt-3">
              Оператором персональных данных является{" "}
              <strong className="text-foreground">{LEGAL_ENTITY_FULL}</strong>{" "}
              ({LEGAL_ENTITY_SHORT}), ИНН {LEGAL_INN}, ОГРН {LEGAL_OGRN},
              юридический адрес: {LEGAL_ADDRESS} (далее — «Оператор»).
            </p>
            <p className="mt-3">
              Оператор обрабатывает персональные данные в соответствии с
              Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных
              данных» и настоящей Политикой.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. Какие данные мы собираем
            </h2>
            <p className="mb-3">
              При заполнении форм на Сайте и при посещении Сайта могут
              обрабатываться:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>адрес электронной почты;</li>
              <li>название бренда или компании;</li>
              <li>
                технические данные: IP-адрес, данные браузера, сведения об
                использовании Сайта, cookie-файлы.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. Цели обработки
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>обработка заявок и обратная связь;</li>
              <li>информирование о продуктах и услугах Оператора;</li>
              <li>улучшение работы Сайта и анализ его использования.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Правовые основания и способы обработки
            </h2>
            <p>
              Обработка персональных данных осуществляется на основании
              согласия субъекта персональных данных, а также в иных случаях,
              предусмотренных законодательством Российской Федерации.
            </p>
            <p className="mt-3">
              Обработка может выполняться с использованием средств автоматизации
              и без таковых и включает: сбор, запись, систематизацию,
              накопление, хранение, уточнение (обновление, изменение),
              извлечение, использование, передачу (предоставление, доступ),
              блокирование, удаление и уничтожение персональных данных.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. Сроки хранения
            </h2>
            <p>
              Персональные данные обрабатываются до достижения целей обработки,
              до отзыва согласия субъектом персональных данных либо до
              истечения сроков, установленных законодательством Российской
              Федерации, в зависимости от того, какое событие наступит раньше.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Передача персональных данных
            </h2>
            <p>
              Оператор может передавать персональные данные третьим лицам в
              объёме, необходимом для работы Сайта и обработки обращений
              (например, хостинг-провайдеру, сервису электронной почты), при
              условии обеспечения конфиденциальности и безопасности данных.
              Передача осуществляется только в целях, указанных в настоящей
              Политике, либо в случаях, предусмотренных законом.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              7. Права субъекта персональных данных
            </h2>
            <p className="mb-3">Субъект персональных данных вправе:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                получать сведения об обработке своих персональных данных;
              </li>
              <li>требовать уточнения, блокирования или уничтожения данных;</li>
              <li>отозвать согласие на обработку персональных данных;</li>
              <li>
                обжаловать действия Оператора в Роскомнадзор или в суд.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              8. Cookie-файлы
            </h2>
            <p>
              Информация об использовании cookie-файлов на Сайте содержится в
              отдельном документе —{" "}
              <Link href="/cookies" className="text-accent hover:underline">
                Политике использования cookie
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              9. Контакты
            </h2>
            <p>
              По вопросам обработки персональных данных обращайтесь:
            </p>
            <ul className="mt-3 list-none space-y-2 pl-0">
              <li>
                email:{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-accent hover:underline"
                >
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                тел.:{" "}
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="text-accent hover:underline"
                >
                  {SITE_PHONE}
                </a>
              </li>
              <li>адрес: {LEGAL_ADDRESS}</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
