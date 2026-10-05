"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  YANDEX_METRIKA_ID,
} from "../lib/site";

export default function YandexMetrika() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted") {
      setEnabled(true);
    }

    const onAccept = () => setEnabled(true);
    window.addEventListener(COOKIE_CONSENT_EVENT, onAccept);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onAccept);
  }, []);

  if (!enabled) return null;

  const init = `
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');
    ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
  `;

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {init}
      </Script>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
