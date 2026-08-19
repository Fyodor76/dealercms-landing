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
  SITE_URL,
} from "../lib/site";

export const metadata = {
  title: "Согласие на обработку персональных данных",
  description:
    "Согласие пользователя на обработку персональных данных при использовании сайта DealerCMS.",
};

export default function ConsentPage() {
  const siteHost = SITE_URL.replace(/^https?:\/\//, "");

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
              {siteHost}
            </a>
            , я соглашаюсь на их обработку в соответствии с{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Политикой обработки персональных данных
            </Link>{" "}
            {LEGAL_ENTITY_SHORT}. Я подтверждаю, что ознакомился с указанным
            документом до направления персональных данных.
          </p>

          <div className="space-y-2 rounded-xl border border-border bg-surface/50 p-5">
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
              <strong className="text-foreground">ОГРН:</strong> {LEGAL_OGRN}
            </p>
            <p>
              <strong className="text-foreground">
                Адрес оператора персональных данных:
              </strong>{" "}
              {LEGAL_ADDRESS}
            </p>
          </div>

          <p>
            Настоящим субъект персональных данных предоставляет указанному
            Оператору согласие на обработку следующих персональных данных:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>имя;</li>
            <li>номер телефона;</li>
            <li>адрес электронной почты;</li>
            <li>название бренда или компании;</li>
            <li>текст сообщения, направленного через форму на сайте;</li>
            <li>данные об использовании сайта Оператора (включая cookie).</li>
          </ul>

          <p>
            Обработка указанных персональных данных может осуществляться
            Оператором в смешанной форме посредством их сбора, записи,
            систематизации, накопления, хранения, уточнения (обновления,
            изменения), извлечения, использования, передачи (предоставления,
            доступа), блокирования, удаления, уничтожения в целях:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>обработки заявок и обратной связи;</li>
            <li>информирования о продуктах и услугах Оператора;</li>
            <li>
              обеспечения текущей хозяйственной деятельности Оператора (в том
              числе поддержания деловых контактов и обслуживания информационной
              инфраструктуры);
            </li>
            <li>
              заключения и исполнения договоров с субъектом персональных данных,
              его работодателем или связанными лицами.
            </li>
          </ul>

          <p>
            Оператор вправе передавать персональные данные лицам,
            обрабатывающим их по поручению Оператора (хостинг, электронная
            почта, техническая поддержка), в объёме, необходимом для указанных
            целей, при условии соблюдения конфиденциальности и требований к
            защите персональных данных.
          </p>

          <p>
            <strong className="text-foreground">Срок действия согласия.</strong>{" "}
            Персональные данные могут обрабатываться на условиях настоящего
            согласия до получения от субъекта заявления о прекращении обработки
            персональных данных, если иное не предусмотрено законодательством
            Российской Федерации или договором.
          </p>

          <p>
            <strong className="text-foreground">Способ отзыва согласия.</strong>{" "}
            Настоящее согласие может быть отозвано посредством направления на
            адрес Оператора ({LEGAL_ADDRESS}) и (или) на{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-accent hover:underline"
            >
              {SITE_EMAIL}
            </a>{" "}
            заявления с требованием о прекращении обработки персональных данных.
            Заявление должно содержать номер основного документа,
            удостоверяющего личность субъекта персональных данных, сведения о
            дате выдачи указанного документа и выдавшем его органе, а также
            подпись субъекта персональных данных.
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
