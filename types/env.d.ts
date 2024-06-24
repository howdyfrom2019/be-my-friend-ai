declare namespace NodeJS {
  interface ProcessEnv {
    readonly OPEN_AI_API_KEY: string;
    readonly NEXT_PUBLIC_ENVIRONMENT: "dev" | "prod";
  }
}
