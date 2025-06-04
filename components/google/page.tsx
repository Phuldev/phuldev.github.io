'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-G97S196JFD'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetIdOrEventName: string | Date,
      config?: Record<string, unknown>
    ) => void
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
