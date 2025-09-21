/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PAYPAL_CLIENT_ID?: string
  readonly VITE_SHOP_ENABLE_PAYPAL?: string
  readonly VITE_EMAILJS_SERVICE_ID?: string
  readonly VITE_EMAILJS_TEMPLATE_ID?: string
  readonly VITE_EMAILJS_PUBLIC_KEY?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
