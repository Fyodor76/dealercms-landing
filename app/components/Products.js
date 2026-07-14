"use client";

import { useState } from "react";

const products = [
  {
    id: "sites",
    tag: "Сайты и контент",
    title: "DealerCMS Sites",
    subtitle: "Конструктор дилерских сайтов на единой платформе",
    description:
      "Импортёр задаёт стандарты бренда для всей сети, а каждый дилерский центр самостоятельно ведёт локальный контент — без отдельной разработки под каждую точку.",
    features: [
      {
        title: "Единый шаблон бренда",
        text: "Дизайн, структура и обязательные разделы обновляются централизованно — сеть выглядит цельно, изменения доходят до всех сайтов сразу.",
      },
      {
        title: "Редактирование на стороне дилера",
        text: "Дилер добавляет акции, новости, посадочные страницы и медиа под свои задачи, оставаясь в рамках брендбука.",
      },
    ],
    accent: "from-accent/20 to-accent/5",
  },
  {
    id: "catalog",
    tag: "Каталог и подбор",
    title: "DealerCMS Catalog",
    subtitle: "Интерактивный каталог автомобилей для сайта и внешних каналов",
    description:
      "Покупатель работает с актуальным стоком, сравнивает комплектации и рассчитывает условия покупки ещё до визита в салон.",
    features: [
      "Каталог новых автомобилей и авто с пробегом",
      "Фильтры, сравнение моделей и комплектаций",
      "Калькуляторы кредита, страхования и trade-in",
      "Виджет для встраивания на сайт или отдельный стендалон",
      "Выгрузка каталога в мессенджеры и партнёрские площадки",
    ],
    accent: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: "sales",
    tag: "Онлайн-продажи",
    title: "DealerCMS Sales",
    subtitle: "Инструменты для проведения сделки в digital-канале",
    description:
      "Фиксирует действия клиента на каждом шаге, передаёт обогащённый лид в CRM и помогает довести покупателя до бронирования или оплаты.",
    features: [
      "Бронирование автомобиля и приём предоплаты",
      "Интеграция с CRM и учётными системами дилера",
      "Оформление кредита, лизинга и страховых продуктов",
      "Продажа дополнительного оборудования и аксессуаров",
      "Автоматические уведомления на этапах сделки",
    ],
    accent: "from-violet-500/20 to-violet-500/5",
  },
];

function ProductCard({ product, isOpen, onToggle }) {
  const isSites = product.id === "sites";

  return (
    <div
      className={`group gradient-card rounded-2xl border border-border p-6 transition-all duration-300 hover:border-accent/30 sm:p-8 ${
        isOpen ? "border-accent/30" : ""
      } lg:border-border lg:hover:border-accent/30`}
    >
      <div
        className={`mb-6 inline-flex rounded-full bg-gradient-to-r ${product.accent} px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent`}
      >
        {product.tag}
      </div>

      <h3 className="text-2xl font-bold sm:text-3xl">{product.title}</h3>
      <p className="mt-2 text-lg text-muted">{product.subtitle}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted/80">
        {product.description}
      </p>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "mt-6 max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } lg:mt-6 lg:max-h-none lg:opacity-100`}
      >
        {isSites ? (
          <div className="space-y-4">
            {product.features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <div className="font-medium text-accent">{f.title}</div>
                <p className="mt-1 text-sm text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="mt-6 flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover lg:hidden"
      >
        {isOpen ? "Свернуть" : "Подробнее"}
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Products() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Модули платформы
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            От сайта до сделки —
            <br />
            в одной экосистеме
          </h2>
          <p className="mt-4 text-lg text-muted">
            Три связанных модуля закрывают digital-путь клиента: привлечение,
            подбор автомобиля и оформление покупки
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isOpen={openId === product.id}
              onToggle={() =>
                setOpenId(openId === product.id ? null : product.id)
              }
            />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Нужна вся экосистема или отдельный модуль?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Подберём конфигурацию под вашу сеть — от одного дилерского центра
            до федерального бренда
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            Запросить демо
          </a>
        </div>
      </div>
    </section>
  );
}
