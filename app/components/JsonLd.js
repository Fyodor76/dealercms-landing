import {
  LEGAL_ENTITY_FULL,
  LEGAL_INN,
  LEGAL_OGRN,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_SCHEMA,
  SITE_URL,
} from "../lib/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: LEGAL_ENTITY_FULL,
        url: SITE_URL,
        email: SITE_EMAIL,
        telephone: SITE_PHONE_SCHEMA,
        description: SITE_DESCRIPTION,
        taxID: LEGAL_INN,
        identifier: LEGAL_OGRN,
        address: {
          "@type": "PostalAddress",
          addressCountry: "RU",
          streetAddress: "ул. Салтыкова-Щедрина, д. 19/21, кв. 4А",
          addressLocality: "Орёл",
          addressRegion: "Орловская область",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "ru-RU",
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

