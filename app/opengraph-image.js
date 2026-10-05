import { ImageResponse } from "next/og";

export const alt =
  "DealerCMS — сайты и CMS для автодилеров и дилерских сетей";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(180deg, #0a1628 0%, #06080d 100%)",
          color: "#f0f2f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#fcc96c",
            marginBottom: 28,
          }}
        >
          SaaS для автобизнеса
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          DealerCMS — сайты и CMS для автодилеров
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#8b95a8",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Конструктор дилерских сайтов, каталог автомобилей и онлайн-продажи
        </div>
      </div>
    ),
    size,
  );
}
