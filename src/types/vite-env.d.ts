/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_USE_MOCK: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_PORT: string
  readonly VITE_BASE_URL: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
