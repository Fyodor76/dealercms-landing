"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { SITE_PHONE, SITE_PHONE_TEL } from "../lib/site";

const navLinks = [
  { href: "#products", label: "Продукты", id: "products" },
  { href: "#benefits", label: "Преимущества", id: "benefits" },
  { href: "#clients", label: "Клиенты", id: "clients" },
  { href: "#contact", label: "Контакты", id: "contact" },
];

function BurgerButton({ open, onClick }) {
  return (
    <button
      type="button"
      className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-colors hover:border-accent/30 hover:bg-white/5 lg:hidden"
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Закрыть меню" : "Открыть меню"}
    >
      <span className="flex h-4 w-5 flex-col items-center justify-between">
        <span
          className={`h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-out ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-out ${
            open ? "scale-x-0 opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-out ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.15, 0.4, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] transition-all duration-300 ${
        scrolled || menuOpen
          ? "glass border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center" title="DealerCMS — на главную">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm ${
                activeSection === link.id
                  ? "active text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {SITE_PHONE}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Запросить демо
          </a>
        </div>

        <BurgerButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="glass border-t border-border">
            <nav className="flex flex-col gap-1 px-4 py-5">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link-mobile rounded-lg px-4 py-3 text-base transition-colors ${
                    menuOpen ? "menu-item-animate" : ""
                  } ${
                    activeSection === link.id
                      ? "active font-medium text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                  style={menuOpen ? { animationDelay: `${index * 60}ms` } : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className={`px-4 py-3 text-muted transition-colors hover:text-foreground ${
                  menuOpen ? "menu-item-animate" : ""
                }`}
                style={menuOpen ? { animationDelay: "240ms" } : undefined}
              >
                {SITE_PHONE}
              </a>
              <a
                href="#contact"
                className={`mx-4 mt-2 rounded-full bg-accent py-3 text-center font-medium text-background transition-colors hover:bg-accent-hover ${
                  menuOpen ? "menu-item-animate" : ""
                }`}
                style={menuOpen ? { animationDelay: "300ms" } : undefined}
                onClick={closeMenu}
              >
                Запросить демо
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
