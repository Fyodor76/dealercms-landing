import { Inter } from "next/font/google";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "DealerCMS | Платформа для создания сайтов автодилеров и дистрибьюторов",
  description:
    "DealerCMS — CMS-платформа для автобрендов и дилерских сетей. Создавайте сайты, онлайн-витрины и цифровые сделки для Nissan, BMW, Mercedes-Benz, VW и других брендов.",
  keywords: [
    "DealerCMS",
    "CMS для автодилеров",
    "сайты автодилеров",
    "платформа для автобрендов",
  ],
  openGraph: {
    title: "DealerCMS | Платформа для автодилеров",
    description:
      "Цифровые решения для автомобильного бизнеса — сайты, витрины и онлайн-сделки",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="DealerCMS" />
        <link rel="manifest" href="/icons/site.webmanifest" />
      </head>
      <body className="min-h-full w-full overflow-x-hidden flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
