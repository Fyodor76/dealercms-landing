import Link from "next/link";
import Logo from "../components/Logo";

export const metadata = {
  title: "Политика использования cookie",
  description:
    "Политика использования cookie-файлов на сайте DealerCMS: какие cookie применяются и как ими управлять.",
};

export default function CookiesPage() {
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
          Политика использования cookie
        </h1>
        <p className="mt-4 text-sm text-muted">
          Дата публикации: 15 июля 2026 г.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Что такое cookie
            </h2>
            <p>
              Cookie — это небольшие текстовые файлы, которые сохраняются на
              вашем устройстве при посещении сайта DealerCMS (далее — «Сайт»).
              Они помогают Сайту запоминать ваши настройки и обеспечивать
              корректную работу.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. Какие cookie мы используем
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Необходимые</strong> —
                обеспечивают базовую работу Сайта, например сохранение вашего
                согласия на использование cookie.
              </li>
              <li>
                <strong className="text-foreground">Аналитические</strong> —
                помогают понять, как посетители используют Сайт, чтобы улучшать
                его работу (например, сервисы веб-аналитики).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. Зачем мы используем cookie
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Обеспечение корректной работы Сайта</li>
              <li>Сохранение пользовательских настроек</li>
              <li>Анализ посещаемости и улучшение пользовательского опыта</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Как управлять cookie
            </h2>
            <p>
              Вы можете отключить или удалить cookie в настройках вашего
              браузера. Обратите внимание: при отключении cookie некоторые
              функции Сайта могут работать некорректно.
            </p>
            <p className="mt-3">
              Инструкции по управлению cookie доступны в справке вашего
              браузера (Chrome, Safari, Firefox, Edge и др.).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. Срок хранения
            </h2>
            <p>
              Необходимые cookie хранятся до истечения срока их действия или
              до удаления вами. Срок хранения аналитических cookie зависит от
              используемого сервиса и обычно составляет от нескольких месяцев
              до одного года.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Контакты
            </h2>
            <p>
              По вопросам использования cookie обращайтесь:{" "}
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
