/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY: string = 'bd282f587e44940e9d4cba532f3f6c6c';
    readonly VITE_API_BASE_URL: string = 'https://api.themoviedb.org/3';
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }