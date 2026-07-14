import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block">
              <Logo />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Платформа для создания сайтов автодилеров и дистрибьюторов.
              Цифровые решения для автомобильного бизнеса.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="tel:88003332349"
                  className="transition-colors hover:text-accent"
                >
                  8 (800) 333-23-49
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dealercms.ru"
                  className="transition-colors hover:text-accent"
                >
                  info@dealercms.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Продукты
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href="#products" className="transition-colors hover:text-accent">
                  DealerPlatform
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-accent">
                  DealerShop
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-accent">
                  DealerDeal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {currentYear} DealerCMS. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted sm:justify-end">
            <a href="/cookies" className="transition-colors hover:text-accent">
              Политика cookie
            </a>
            <a href="/privacy" className="transition-colors hover:text-accent">
              Политика конфиденциальности
            </a>
            <a href="/soglasie" className="transition-colors hover:text-accent">
              Согласие на обработку данных
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
