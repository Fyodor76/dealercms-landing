const clients = [
  { name: "BMW", style: "font-bold tracking-widest" },
  { name: "FORD", style: "font-bold tracking-wider" },
  { name: "FORLAND", style: "font-semibold tracking-wide" },
  { name: "FOTON", style: "font-semibold tracking-wider" },
  { name: "INFINITI", style: "font-light tracking-[0.2em]" },
  { name: "KAIYI", style: "font-semibold tracking-widest" },
  {
    name: "MERCEDES-BENZ",
    style: "font-light tracking-wide text-[0.65rem] leading-tight sm:text-xs md:text-sm",
  },
  { name: "NISSAN", style: "font-bold tracking-widest" },
  { name: "SOLLERS", style: "font-semibold tracking-wide" },
  { name: "SWM", style: "font-bold tracking-widest" },
  { name: "TANK", style: "font-bold tracking-widest" },
  { name: "VW", style: "font-bold tracking-widest" },
];

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="relative w-full overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Клиенты
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Нам доверяют
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Ведущие автобренды и дилерские сети выбирают DealerCMS для
            цифровой трансформации
          </p>
        </div>

        <div className="relative mt-16 w-full max-w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent sm:w-32" />

          <div className="w-full overflow-hidden">
            <div className="animate-marquee flex w-max shrink-0 gap-4 sm:gap-6">
              {doubled.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-elevated px-4 transition-colors hover:border-accent/30 sm:h-24 sm:w-56 sm:px-6"
                >
                  <span className={`text-base text-foreground/80 sm:text-lg ${client.style}`}>
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex min-h-20 items-center justify-center rounded-xl border border-border bg-surface/50 px-3 py-4 text-center transition-all hover:border-accent/20 hover:bg-surface sm:min-h-[5.5rem] sm:px-4"
            >
              <span className={`text-sm text-muted sm:text-base ${client.style}`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
