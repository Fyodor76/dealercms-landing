import {
  LEGAL_ENTITY_FULL,
  LEGAL_INN,
  LEGAL_KPP,
  LEGAL_OGRN,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_SCHEMA,
  SITE_PRODUCTS,
  SITE_TITLE,
  SITE_URL,
} from "../lib/site";

export default function JsonLd() {
  const orgId = `${SITE_URL}/#organization`;
  const siteId = `${SITE_URL}/#website`;
  const appId = `${SITE_URL}/#software`;
  const logoUrl = `${SITE_URL}/logo.svg`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        alternateName: ["Dealer CMS", LEGAL_ENTITY_FULL],
        legalName: LEGAL_ENTITY_FULL,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          caption: SITE_NAME,
        },
        image: logoUrl,
        email: SITE_EMAIL,
        telephone: SITE_PHONE_SCHEMA,
        description: SITE_DESCRIPTION,
        taxID: LEGAL_INN,
        vatID: LEGAL_INN,
        identifier: [
          { "@type": "PropertyValue", name: "INN", value: LEGAL_INN },
          { "@type": "PropertyValue", name: "KPP", value: LEGAL_KPP },
          { "@type": "PropertyValue", name: "OGRN", value: LEGAL_OGRN },
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "RU",
          streetAddress: "ул. Салтыкова-Щедрина, д. 19/21, кв. 4А",
          addressLocality: "Орёл",
          addressRegion: "Орловская область",
        },
        areaServed: { "@type": "Country", name: "Россия" },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE_PHONE_SCHEMA,
            email: SITE_EMAIL,
            contactType: "sales",
            availableLanguage: ["Russian"],
          },
        ],
        knowsAbout: [
          "CMS для автодилеров",
          "дилерские сайты",
          "каталог автомобилей",
          "онлайн-продажи автомобилей",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": appId,
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: logoUrl,
        publisher: { "@id": orgId },
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}/#contact`,
          priceCurrency: "RUB",
          availability: "https://schema.org/OnlineOnly",
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: SITE_TITLE,
        description: SITE_DESCRIPTION,
        publisher: { "@id": orgId },
        inLanguage: "ru-RU",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": siteId },
        about: { "@id": orgId },
        inLanguage: "ru-RU",
        primaryImageOfPage: logoUrl,
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#products`,
        name: "Модули DealerCMS",
        itemListElement: SITE_PRODUCTS.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            "@id": `${appId}-${index + 1}`,
            name: product.name,
            description: product.description,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: `${SITE_URL}/#products`,
            offers: {
              "@type": "Offer",
              url: `${SITE_URL}/#contact`,
              priceCurrency: "RUB",
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
