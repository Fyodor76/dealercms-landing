const benefits = [
  {
    stat: "−20%",
    title: "Более дешёвый лид",
    description:
      "Калькуляторы, trade-in, страховка и кредит на сайте превращают трафик в заявки без дополнительных рекламных расходов",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    stat: "+30%",
    title: "Повторные обращения",
    description:
      "Сервисные модули, запись на ТО и каталог аксессуаров удерживают клиента в экосистеме бренда после покупки авто",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-2.73a1 1 0 01-.58-.92V6.37a1 1 0 01.58-.92l5.1-2.73a1 1 0 01.84 0l5.1 2.73a1 1 0 01.58.92v5.15a1 1 0 01-.58.92l-5.1 2.73a1 1 0 01-.84 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75V17.25M12 14.75v4.5" />
      </svg>
    ),
  },
  {
    stat: "+10%",
    title: "Рост digital-продаж",
    description:
      "Онлайн-бронирование и предоплата сокращают путь от интереса к покупке — клиент не уходит к конкуренту",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    stat: "×3",
    title: "Меньше затрат на IT",
    description:
      "Один шаблон и единая платформа для всей сети вместо отдельных проектов на каждого дилера — быстрее запуск и проще поддержка",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Преимущества
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Что получает бизнес
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group gradient-card rounded-2xl border border-border p-8 transition-all hover:border-accent/20"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {benefit.icon}
                </div>
                <span className="text-3xl font-bold text-accent">
                  {benefit.stat}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
