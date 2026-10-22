import Link from "next/link";
import Logo from "../components/Logo";
import {
  IT_ACTIVITY_CODES,
  IT_ACTIVITY_PAGE_DATE,
  LEGAL_ADDRESS,
  LEGAL_ENTITY_FULL,
  LEGAL_ENTITY_SHORT,
  LEGAL_INN,
  LEGAL_KPP,
  LEGAL_OGRN,
  LEGAL_OKVED,
  LEGAL_OKVED_NAME,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_PRODUCTS,
  SITE_URL,
} from "../lib/site";

export const metadata = {
  title: "Сведения об ИТ-деятельности",
  description:
    "Сведения об ИТ-деятельности ООО «ДИЛЕРЦМС» на официальном сайте в соответствии с Приказом Минцифры России от 02.06.2025 № 511: реквизиты, виды деятельности, описание продуктов и технологий.",
  alternates: { canonical: "/it-activity" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Сведения об ИТ-деятельности — DealerCMS",
    description:
      "Официальные сведения об ИТ-деятельности ООО «ДИЛЕРЦМС» (платформа DealerCMS).",
    url: `${SITE_URL}/it-activity`,
  },
};

function H2({ children }) {
  return (
    <h2 className="mb-3 mt-10 text-lg font-semibold text-foreground first:mt-0">
      {children}
    </h2>
  );
}

function H3({ children }) {
  return (
    <h3 className="mb-2 mt-6 text-base font-semibold text-foreground">
      {children}
    </h3>
  );
}

function P({ children }) {
  return <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>;
}

const SOFTWARE_PRODUCTS = [
  {
    name: "DealerCMS Sites",
    summary:
      "Программа для ЭВМ — конструктор и система управления контентом дилерских сайтов автобрендов и дилерских сетей.",
    details: [
      "проектирование и разработка программных модулей CMS для сайтов дилерских центров;",
      "адаптация и кастомизация шаблонов под бренд-стандарты импортёра;",
      "централизованное обновление структуры и обязательных разделов сети;",
      "внедрение, настройка, сопровождение и техническая поддержка.",
    ],
  },
  {
    name: "DealerCMS Catalog",
    summary:
      "Программа для ЭВМ и база данных — интерактивный каталог новых автомобилей и автомобилей с пробегом.",
    details: [
      "разработка и ведение каталога моделей, комплектаций и стока;",
      "фильтры, сравнение, калькуляторы кредита, страхования и trade-in;",
      "интеграции с внешними каналами и партнёрскими площадками;",
      "виджеты для встраивания каталога на сайты дилеров.",
    ],
  },
  {
    name: "DealerCMS Sales",
    summary:
      "Программа для ЭВМ — модуль онлайн-продажи и цифровой сделки для автобизнеса.",
    details: [
      "бронирование автомобиля и приём предоплаты;",
      "интеграция с CRM и учётными системами дилера;",
      "оформление кредита, лизинга, страхования и доп. оборудования;",
      "автоматизация уведомлений и передача обогащённого лида.",
    ],
  },
];

const SERVICES = [
  {
    title: "Разработка и развитие программного обеспечения",
    text: "Проектирование, разработка, доработка и модернизация программ для ЭВМ, баз данных и пользовательских интерфейсов платформы DealerCMS и связанных информационных систем.",
  },
  {
    title: "Создание и сопровождение сайтов",
    text: "Проектирование, разработка, внедрение и сопровождение сайтов и посадочных страниц дилерских центров и дистрибьюторов на базе платформы DealerCMS.",
  },
  {
    title: "Внедрение и интеграция",
    text: "Установка, настройка, конфигурирование и интеграция программных модулей с CRM, учётными системами, платёжными и иными сервисами заказчика.",
  },
  {
    title: "Предоставление прав использования (SaaS / лицензирование)",
    text: "Предоставление заказчикам прав использования программ для ЭВМ DealerCMS, в том числе путём удалённого доступа через сеть «Интернет» (модель SaaS) и лицензионных соглашений.",
  },
  {
    title: "Сопровождение и техническая поддержка",
    text: "Эксплуатация, администрирование, тестирование, обновление, консультационные услуги и обучение пользователей по продуктам DealerCMS.",
  },
];

const TECHNOLOGIES = [
  {
    group: "Языки программирования",
    items: [
      "Go (Golang) — серверная логика, микросервисы, API и фоновые процессы;",
      "JavaScript / TypeScript — клиентские и серверные веб-приложения;",
      "Python — вспомогательные скрипты, интеграции и автоматизация;",
      "SQL — работа с реляционными базами данных;",
      "HTML, CSS — разметка и оформление пользовательских интерфейсов.",
    ],
  },
  {
    group: "Программное обеспечение и фреймворки",
    items: [
      "Next.js, React — разработка веб-приложений и административных интерфейсов;",
      "Node.js — серверная среда исполнения для веб-приложений;",
      "PostgreSQL и иные СУБД — хранение и обработка данных каталогов и контента;",
      "Docker, Docker Compose — контейнеризация и развёртывание сервисов;",
      "Nginx — обратный прокси и доставка веб-трафика.",
    ],
  },
  {
    group: "Инструменты и процессы разработки",
    items: [
      "Git — система контроля версий исходного кода;",
      "GitHub Actions и CI/CD-конвейеры — автоматическая сборка, тестирование и публикация;",
      "REST API — интеграция модулей платформы и внешних систем заказчиков;",
      "практики code review, модульного и интеграционного тестирования;",
      "мониторинг доступности и журналирование для сопровождения продуктов.",
    ],
  },
];

export default function ItActivityPage() {
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
          Сведения об ИТ-деятельности организации
        </h1>
        <p className="mt-4 text-sm text-muted">
          Дата размещения (актуализации) сведений: {IT_ACTIVITY_PAGE_DATE}
        </p>
        <P>
          Настоящая страница официального сайта {SITE_URL} содержит сведения об
          организации и осуществляемой ею деятельности в области информационных
          технологий в соответствии с Приказом Министерства цифрового развития,
          связи и массовых коммуникаций Российской Федерации от 02.06.2025 № 511
          и перечнем видов ИТ-деятельности, утверждённым Приказом Минцифры
          России от 11.05.2023 № 449. Доступ к сведениям предоставляется
          круглосуточно без регистрации и без предоставления персональных
          данных.
        </P>

        <div className="mt-10 space-y-1">
          <H2>1. Сведения об организации</H2>
          <dl className="mt-4 space-y-3 rounded-2xl border border-border bg-surface p-5 text-sm sm:p-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">
                Полное наименование
              </dt>
              <dd className="mt-1 text-foreground">{LEGAL_ENTITY_FULL}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">
                Сокращённое наименование
              </dt>
              <dd className="mt-1 text-foreground">{LEGAL_ENTITY_SHORT}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">
                Адрес в пределах места нахождения
              </dt>
              <dd className="mt-1 text-foreground">{LEGAL_ADDRESS}</dd>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  ИНН
                </dt>
                <dd className="mt-1 text-foreground">{LEGAL_INN}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  КПП
                </dt>
                <dd className="mt-1 text-foreground">{LEGAL_KPP}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  ОГРН
                </dt>
                <dd className="mt-1 text-foreground">{LEGAL_OGRN}</dd>
              </div>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">
                Основной код ОКВЭД
              </dt>
              <dd className="mt-1 text-foreground">
                {LEGAL_OKVED} — {LEGAL_OKVED_NAME}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">
                Адрес электронной почты
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-accent transition-colors hover:text-accent-hover"
                >
                  {SITE_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">
                Номер телефона
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="text-accent transition-colors hover:text-accent-hover"
                >
                  {SITE_PHONE}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted">
                Официальный сайт
              </dt>
              <dd className="mt-1">
                <a
                  href={SITE_URL}
                  className="text-accent transition-colors hover:text-accent-hover"
                >
                  {SITE_URL}
                </a>
              </dd>
            </div>
          </dl>

          <H2>2. Коды видов деятельности в области информационных технологий</H2>
          <P>
            Организация осуществляет следующие виды деятельности в области
            информационных технологий в соответствии с Приказом Минцифры России
            от 11.05.2023 № 449:
          </P>
          <ul className="mt-4 space-y-4">
            {IT_ACTIVITY_CODES.map((item) => (
              <li
                key={item.code}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <div className="font-semibold text-accent">Код {item.code}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>

          <H2>3. Описание ИТ-деятельности, товаров, работ и услуг</H2>
          <P>
            {LEGAL_ENTITY_SHORT} осуществляет деятельность в области
            информационных технологий под коммерческим наименованием{" "}
            {SITE_NAME}. Организация разрабатывает, внедряет и сопровождает
            программные продукты и информационные системы для автобрендов,
            дистрибьюторов и дилерских сетей: конструктор дилерских сайтов,
            каталог автомобилей и инструменты онлайн-продаж.
          </P>
          <P>
            Основные направления реализуемой ИТ-деятельности включают:
            проектирование и разработку программ для ЭВМ и баз данных;
            создание и сопровождение сайтов; проектирование и развитие
            информационных систем; предоставление прав использования
            программного обеспечения (включая удалённый доступ); интеграцию с
            внешними системами заказчиков; консультационные услуги и техническую
            поддержку.
          </P>

          <H3>3.1. Разрабатываемые и реализуемые программные продукты</H3>
          {SOFTWARE_PRODUCTS.map((product) => (
            <div key={product.name} className="mt-5">
              <p className="text-sm font-semibold text-foreground">
                {product.name}
              </p>
              <P>{product.summary}</P>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {product.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}

          <H3>3.2. Краткие сведения о модулях платформы</H3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            {SITE_PRODUCTS.map((product) => (
              <li key={product.name}>
                <span className="font-medium text-foreground">
                  {product.name}.
                </span>{" "}
                {product.description}
              </li>
            ))}
          </ul>

          <H3>3.3. Оказываемые услуги и выполняемые работы</H3>
          <ul className="mt-4 space-y-3">
            {SERVICES.map((service) => (
              <li
                key={service.title}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <div className="text-sm font-semibold text-foreground">
                  {service.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </li>
            ))}
          </ul>

          <H2>4. Информация о стоимости товаров, работ и услуг</H2>
          <P>
            Информация о стоимости реализуемых (разрабатываемых) организацией
            товаров, оказываемых услуг и выполняемых работ составляет
            коммерческую тайну организации и не подлежит опубликованию на
            официальном сайте в соответствии с законодательством Российской
            Федерации о коммерческой тайне.
          </P>
          <P>
            Актуальные коммерческие условия предоставления прав использования
            программ для ЭВМ DealerCMS, внедрения и сопровождения определяются
            индивидуально в договорах с заказчиками. По вопросам стоимости можно
            обратиться по адресу{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              {SITE_EMAIL}
            </a>{" "}
            или по телефону{" "}
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              {SITE_PHONE}
            </a>
            .
          </P>

          <H2>
            5. Исключительные права на программы для ЭВМ и базы данных (п. 3
            Приказа № 511)
          </H2>
          <P>
            {LEGAL_ENTITY_SHORT} является правообладателем исключительных прав
            на программы для ЭВМ и связанные базы данных платформы {SITE_NAME},
            включая модули DealerCMS Sites, DealerCMS Catalog и DealerCMS Sales,
            разработанные организацией.
          </P>
          <P>
            Право использования указанных программ предоставляется заказчикам
            следующими способами: заключение лицензионного договора
            (неисключительная лицензия); предоставление удалённого доступа к
            программам для ЭВМ и базам данных через сеть «Интернет» (модель
            SaaS); иные способы, предусмотренные договором с конкретным
            заказчиком.
          </P>

          <H2>
            6. Языки программирования, программное обеспечение и инструменты
            разработки (п. 4 Приказа № 511)
          </H2>
          <P>
            В рамках осуществления ИТ-деятельности организация использует
            следующие языки программирования, программное обеспечение и наборы
            правил и инструментов для разработки программного обеспечения и
            построения процессов программирования:
          </P>
          {TECHNOLOGIES.map((block) => (
            <div key={block.group}>
              <H3>{block.group}</H3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <H2>7. Доступность сведений</H2>
          <P>
            Официальный сайт организации функционирует в круглосуточном режиме и
            обеспечивает свободный доступ к настоящей информации без
            необходимости регистрации пользователя или предоставления
            персональных данных.
          </P>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-sm text-muted">
          <p>
            {LEGAL_ENTITY_SHORT}, ИНН {LEGAL_INN}, ОГРН {LEGAL_OGRN}
          </p>
          <p className="mt-1">{LEGAL_ADDRESS}</p>
          <p className="mt-4">
            <Link
              href="/"
              className="text-accent transition-colors hover:text-accent-hover"
            >
              ← Вернуться на главную
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
