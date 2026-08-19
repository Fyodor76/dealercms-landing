import Link from "next/link";
import Logo from "../components/Logo";
import {
  LEGAL_ADDRESS,
  LEGAL_ENTITY_FULL,
  LEGAL_ENTITY_SHORT,
  LEGAL_INN,
  LEGAL_POLICY_DATE,
  SITE_EMAIL,
  SITE_URL,
} from "../lib/site";

export const metadata = {
  title: "Согласие на обработку персональных данных",
  description:
    "Согласие пользователя на обработку персональных данных при использовании сайта DealerCMS.",
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
          Дата публикации: {LEGAL_POLICY_DATE}
        </p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            Предоставляя персональные данные через формы на сайте{" "}
            <a href={SITE_URL} className="text-accent hover:underline">
              {SITE_URL.replace(/^https?:\/\//, "")}
            </a>
            , я соглашаюсь на их обработку в соответствии с{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Политикой обработки персональных данных
            </Link>
            .
          </p>

          <div className="rounded-xl border border-border bg-surface/50 p-5 space-y-2">
            <p>
              <strong className="text-foreground">
                Оператор персональных данных:
              </strong>{" "}
              {LEGAL_ENTITY_FULL} ({LEGAL_ENTITY_SHORT})
            </p>
            <p>
              <strong className="text-foreground">ИНН:</strong> {LEGAL_INN}
            </p>
            <p>
              <strong className="text-foreground">
                Адрес оператора персональных данных:
              </strong>{" "}
              {LEGAL_ADDRESS}
            </p>
          </div>

          <p>
            Настоящим субъект персональных данных предоставляет Оператору
            согласие на обработку следующих персональных данных:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>имя;</li>
            <li>номер телефона;</li>
            <li>адрес электронной почты;</li>
            <li>название бренда или компании;</li>
            <li>данные об использовании сайта Оператора.</li>
          </ul>

          <p>
            Согласие предоставляется для целей обработки заявок, обратной
            связи и информирования о продуктах и услугах Оператора.
          </p>

          <p>
            Обработка персональных данных может осуществляться с
            использованием средств автоматизации и без таковых, включая сбор,
            запись, систематизацию, накопление, хранение, уточнение
            (обновление, изменение), извлечение, использование, передачу
            (предоставление, доступ), блокирование, удаление и уничтожение
            данных.
          </p>

          <p>
            Согласие действует до момента его отзыва. Отзыв согласия возможен
            путём направления заявления на{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-accent hover:underline"
            >
              {SITE_EMAIL}
            </a>{" "}
            и/или по адресу Оператора: {LEGAL_ADDRESS}.
          </p>

          <p>
            Подробнее об обработке данных — в{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Политике обработки персональных данных
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
