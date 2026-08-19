import Logo from "./Logo";
import {
  LEGAL_ADDRESS,
  LEGAL_ENTITY_SHORT,
  LEGAL_INN,
  LEGAL_OGRN,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_TEL,
} from "../lib/site";

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
            <p className="mt-4 max-w-md text-xs leading-relaxed text-muted/80">
              Оператор ПДн: {LEGAL_ENTITY_SHORT}, ИНН {LEGAL_INN}, ОГРН{" "}
              {LEGAL_OGRN}. {LEGAL_ADDRESS}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="transition-colors hover:text-accent"
                >
                  {SITE_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="transition-colors hover:text-accent"
                >
                  {SITE_EMAIL}
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
                  DealerCMS Sites
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-accent">
                  DealerCMS Catalog
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-accent">
                  DealerCMS Sales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {currentYear} {LEGAL_ENTITY_SHORT}. Все права защищены.
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
