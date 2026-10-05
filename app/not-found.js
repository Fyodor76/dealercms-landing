import Link from "next/link";
import Logo from "./components/Logo";

export default function NotFound() {
  return (
    <div className="gradient-hero flex min-h-screen flex-col">
      <meta name="robots" content="noindex, nofollow" />
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-8xl font-bold text-accent sm:text-9xl">404</p>
        <h1 className="mt-6 text-2xl font-bold sm:text-3xl">
          Страница не найдена
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Запрашиваемая страница не существует или была перемещена
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-accent px-8 py-4 font-semibold text-background transition-colors hover:bg-accent-hover"
        >
          На главную
        </Link>
      </main>
    </div>
  );
}
