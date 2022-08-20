import Fastify, { FastifyListenOptions, FastifyServerOptions } from "fastify";
import qs from "qs";
import { loadConfig } from "@lib/config";
import * as defect from "@endpoints/defect";

const CONFIG = loadConfig();

const SERVER_OPTIONS: FastifyServerOptions = {
  logger: true,
  querystringParser: (q) => qs.parse(q),
};

const LISTEN_OPTIONS: FastifyListenOptions = {
  host: CONFIG.host,
  port: CONFIG.port,
};

const server = Fastify(SERVER_OPTIONS);

// register routes
server.get("/defect", defect.getAll);
server.post("/defect", defect.query);
server.delete("/defect/:id", defect.deleteByID);

const main = async () => {
  try {
    await server.listen(LISTEN_OPTIONS);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`server started on ${CONFIG.host}:${CONFIG.port}`);
};

main();
