import Link from "next/link";
import Logo from "../components/Logo";

export const metadata = {
  title: "Согласие на обработку персональных данных | DealerCMS",
};

export default function ConsentPage() {
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
          Согласие на обработку персональных данных
        </h1>
        <p className="mt-4 text-sm text-muted">
          Дата публикации: 15 июля 2026 г.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            Настоящим я даю своё согласие компании DealerCMS (далее —
            «Оператор») на обработку моих персональных данных, указанных в
            форме обратной связи на сайте dealercms.ru, включая: имя, номер
            телефона, адрес электронной почты, название бренда или компании.
          </p>

          <p>
            Согласие предоставляется для целей обработки заявок, обратной
            связи и информирования о продуктах и услугах Оператора.
          </p>

          <p>
            Обработка персональных данных может осуществляться с
            использованием средств автоматизации и без таковых, включая сбор,
            запись, систематизацию, накопление, хранение, уточнение,
            использование, передачу (предоставление, доступ), блокирование,
            удаление и уничтожение данных.
          </p>

          <p>
            Согласие действует до момента его отзыва. Отзыв согласия
            возможен путём направления письма на{" "}
            <a
              href="mailto:info@dealercms.ru"
              className="text-accent hover:underline"
            >
              info@dealercms.ru
            </a>
            .
          </p>

          <p>
            Подробнее об обработке данных — в{" "}
            <Link
              href="/privacy"
              className="text-accent hover:underline"
            >
              Политике обработки персональных данных
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
