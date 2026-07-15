export default function Hero() {
  return (
    <section className="gradient-hero relative min-h-screen w-full overflow-hidden pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[min(100vw,500px)] -translate-x-1/2 rounded-full bg-accent/5 blur-[80px] sm:h-[500px] sm:w-[800px] sm:blur-[120px]" />
        <div className="absolute right-0 top-0 h-[250px] w-[min(80vw,400px)] rounded-full bg-blue-500/5 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <p className="animate-fade-up mb-6 text-xs font-medium uppercase tracking-wide text-accent sm:text-sm sm:tracking-widest">
          SaaS-решения для автобизнеса
        </p>

        <h1 className="animate-fade-up-delay-1 max-w-4xl text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Сайты для автобрендов
          <br />
          <span className="text-gradient">и их дилеров</span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-xl">
          DealerCMS объединяет сайты дилеров, каталог автомобилей и
          инструменты онлайн-продаж в единой платформе для автобизнеса
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-background transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 sm:w-auto sm:px-8 sm:py-4"
          >
            Запросить демо
          </a>
          <a
            href="#products"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-base font-medium transition-colors hover:border-accent/40 hover:bg-white/5 sm:w-auto sm:px-8 sm:py-4"
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

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:mt-20 sm:grid-cols-4 sm:gap-6 sm:pt-10">
          {[
            { value: "3", label: "модуля в экосистеме" },
            { value: "12", label: "брендов в портфеле" },
            { value: "Под ключ", label: "запуск и сопровождение", small: true },
            { value: "100%", label: "фокус на автобизнесе" },
          ].map((stat) => (
            <div key={stat.label} className="min-w-0">
              <div
                className={`font-bold text-accent ${
                  stat.small
                    ? "text-base leading-tight sm:text-2xl"
                    : "text-xl sm:text-3xl"
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-muted sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
