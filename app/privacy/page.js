import Link from "next/link";
import Logo from "../components/Logo";

export const metadata = {
  title: "Политика обработки персональных данных",
  description:
    "Политика обработки персональных данных сайта DealerCMS: какие данные собираются, цели обработки и контакты.",
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
          Дата публикации: 15 июля 2026 г.
        </p>

        <div className="prose-policy mt-10 space-y-6 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика определяет порядок обработки и защиты
              персональных данных пользователей сайта DealerCMS (далее —
              «Сайт»), принадлежащего компании DealerCMS (далее —
              «Оператор»).
            </p>
            <p className="mt-3">
              Оператор обрабатывает персональные данные в соответствии с
              Федеральным законом № 152-ФЗ «О персональных данных».
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. Какие данные мы собираем
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Имя</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Название бренда или компании</li>
              <li>Технические данные: IP-адрес, данные браузера</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. Цели обработки
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Обработка заявок и обратная связь</li>
              <li>Информирование о продуктах и услугах</li>
              <li>Улучшение работы Сайта</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Cookie-файлы
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
              5. Контакты
            </h2>
            <p>
              По вопросам обработки персональных данных обращайтесь:{" "}
              <a
                href="mailto:info@dealercms.ru"
                className="text-accent hover:underline"
              >
                info@dealercms.ru
              </a>
              , тел.{" "}
              <a
                href="tel:88003332349"
                className="text-accent hover:underline"
              >
                8 (800) 333-23-49
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
