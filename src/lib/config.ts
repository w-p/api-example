import dotenv from "dotenv";

const ENV = (process.env.ENV || "local").toLowerCase();
const CONFIG_PATH = `${__dirname}/../../config/${ENV}.app.env`;

export type EnvironmentConfig = {
  env: string;
  host: string;
  port: number;
  db: {
    host: string;
    port: number;
    name: string;
    user: string;
    pass: string;
  };
};

let config: EnvironmentConfig;

export function loadConfig(path?: string, reload = false): EnvironmentConfig {
  if (config && !reload) {
    return config;
  }

  const result = dotenv.config({ path: path || CONFIG_PATH });
  if (result.error) {
    throw new Error(`failed to read env file '${path}': ${result.error}`);
  }

  const { HOST, PORT, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

  config = {
    env: ENV,
    host: HOST || "0.0.0.0",
    port: +(PORT || 3001),
    db: {
      host: DB_HOST || "0.0.0.0",
      port: +(DB_PORT || 5432),
      name: DB_NAME || "postgres",
      user: DB_USER || "postgres",
      pass: DB_PASS || "postgres",
    },
  };

  return config;
}
