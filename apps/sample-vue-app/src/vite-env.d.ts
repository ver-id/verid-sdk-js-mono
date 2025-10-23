/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VERID_AUTHENTICATION_API_URL: string;
  readonly VITE_VERID_AUTHENTICATION_FLOW_ID: string;
  readonly VITE_VERID_AUTHENTICATION_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
