"use client";

import { useState } from "react";

const products = [
  {
    id: "platform",
    tag: "CMS-платформа",
    title: "DealerPlatform",
    subtitle: "No-code конструктор сайтов для продажи автомобилей",
    description:
      "Фундамент цифровой экосистемы вашего бренда. Централизованное управление контентом дистрибьютора и локальное редактирование дилерами.",
    features: [
      {
        title: "Центральное обновление",
        text: "Контент редактируется дистрибьютором. Единый стиль и быстрые обновления для всей дилерской сети.",
      },
      {
        title: "Локальное обновление",
        text: "Дилеры создают собственные разделы, публикуют новости и специальные предложения.",
      },
    ],
    accent: "from-accent/20 to-accent/5",
  },
  {
    id: "shop",
    tag: "Онлайн-витрина",
    title: "DealerShop",
    subtitle: "Устанавливается на любой сайт или автономно",
    description:
      "Открывает возможности для потенциальных клиентов: подбор, сравнение, расчёт кредита и страховки.",
    features: [
      "Новые автомобили в наличии",
      "Автомобили с пробегом",
      "Онлайн-витрина в Telegram",
      "Расчёт кредитных предложений",
      "Оценка trade-in по базе классифайдов",
    ],
    accent: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: "deal",
    tag: "Цифровая сделка",
    title: "DealerDeal",
    subtitle: "Помогает продавать автомобили онлайн",
    description:
      "Удобный формат коммуникаций и сбор информации обогащает лиды и повышает конверсию.",
    features: [
      "Фиксация скидки и частичная онлайн-оплата",
      "Интеграция с CRM",
      "Кредитный калькулятор и страховка",
      "Лизинг и продажа аксессуаров",
      "Триггерные рассылки для возврата в сделку",
    ],
    accent: "from-violet-500/20 to-violet-500/5",
  },
];

function ProductCard({ product, isOpen, onToggle }) {
  const isPlatform = product.id === "platform";

  return (
    <div
      className={`group gradient-card rounded-2xl border border-border p-6 transition-all duration-300 hover:border-accent/30 sm:p-8 ${
        isOpen ? "border-accent/30" : ""
      }`}
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
        }`}
      >
        {isPlatform ? (
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
        className="mt-6 flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        {isOpen ? "Свернуть" : "Развернуть"}
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
  const [openId, setOpenId] = useState("platform");

  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Наши продукты
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Соединяем IT, дизайн
            <br />
            и маркетинг
          </h2>
          <p className="mt-4 text-lg text-muted">
            Помогаем снизить стоимость лидов и увеличить конверсию
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
          <h3 className="text-2xl font-bold sm:text-3xl">Понравился продукт?</h3>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Узнайте больше о дополнительных модулях — каждый из них подводит
            клиента к покупке автомобиля
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
