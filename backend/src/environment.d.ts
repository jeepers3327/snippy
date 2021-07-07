declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'testing';
    REDIS_URI: string;
    APP_SECRET: string;
    APP_PORT: string;
  }
}
