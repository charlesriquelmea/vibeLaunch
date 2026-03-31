// Analytics tracker — structured as if sending to GA4
// In production: window.gtag('event', name, params)

export function trackEvent(name: string, params?: Record<string, unknown>) {
  console.log("VibeLaunch Analytics:", name, params ?? {})
  // In production:
  // if (typeof window !== "undefined" && window.gtag) {
  //   window.gtag("event", name, params)
  // }
}

// Key events:
// page_view, cta_click, form_step_complete, whatsapp_redirect, lang_toggle
