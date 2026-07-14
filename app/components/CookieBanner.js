"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "dealercms-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Уведомление об использовании cookie"
      className="fixed inset-x-0 bottom-0 z-[100] animate-slide-up border-t border-border bg-surface/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-6 lg:px-8">
        <p className="text-sm leading-relaxed text-muted sm:max-w-3xl">
          Для улучшения работы сайта мы используем файлы cookie. Продолжая
          работу с сайтом, вы разрешаете их использование в соответствии с{" "}
          <Link
            href="/cookies"
            className="text-accent underline-offset-2 hover:underline"
          >
            Политикой использования cookie
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover sm:min-w-[140px]"
        >
          Принять
        </button>
      </div>
    </div>
  );
}
