declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'test' | 'production' | 'staging';
    PORT: string;
    APP_URL: string;
    API_NAME: string;
    URL_OPENPIX: string;
    APPID_OPENPIX: string;
  }
}
