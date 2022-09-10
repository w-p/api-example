import { FastifyListenOptions } from "fastify";
import { loadConfig } from "@lib/config";
import { api } from "./api";

const CONFIG = loadConfig();

const LISTEN_OPTIONS: FastifyListenOptions = {
  host: CONFIG.host,
  port: CONFIG.port,
};

const main = async () => {
  try {
    await api.listen(LISTEN_OPTIONS);
  } catch (err) {
    api.log.error(err);
    process.exit(1);
  }

  api.log.info(`Server started successfully`);
};

main();
