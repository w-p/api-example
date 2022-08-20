import fs from "fs";
import { Pool, PoolConfig } from "pg";
import { loadConfig } from "./config";

const CONFIG = loadConfig();

const POOL_CONFIG: PoolConfig = {
  host: CONFIG.db.host,
  port: CONFIG.db.port,
  user: CONFIG.db.user,
  password: CONFIG.db.pass,
  database: CONFIG.db.name,
};

let pool: Pool;

export function getDB(): Pool {
  if (pool) {
    return pool;
  }

  pool = new Pool(POOL_CONFIG);

  return pool;
}

export function readSQL(path: string): string {
  return fs.readFileSync(path, "utf-8");
}
