export default function Hero() {
  return (
    <section className="gradient-hero relative min-h-screen overflow-hidden pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <p className="animate-fade-up mb-6 text-sm font-medium uppercase tracking-widest text-accent">
          SaaS-решения для автобизнеса
        </p>

        <h1 className="animate-fade-up-delay-1 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Сайты для автобрендов
          <br />
          <span className="text-gradient">и их дилеров</span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          DealerCMS объединяет сайты дилеров, каталог автомобилей и
          инструменты онлайн-продаж в единой платформе для автобизнеса
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
          >
            Запросить демо
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium transition-colors hover:border-accent/40 hover:bg-white/5"
          >
            Наши модули
            <svg
              className="h-4 w-4"
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
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
          {[
            { value: "16+", label: "лет в автобизнесе" },
            { value: "1300+", label: "запущенных сайтов" },
            { value: "600+", label: "дилеров на платформе" },
            { value: "14", label: "автобрендов" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-accent sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
