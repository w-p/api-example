import Fastify, { FastifyServerOptions } from "fastify";
import qs from "qs";
import * as defect from "@/endpoints/defect";
import * as healthz from "@/endpoints/healthz";

const API_OPTIONS: FastifyServerOptions = {
  logger: true,
  querystringParser: (q) => qs.parse(q),
};

export const api = Fastify(API_OPTIONS);

// register routes
api.get("/healthz", healthz.get);
api.get("/defect", defect.get);
api.put("/defect", defect.create);
api.post("/defect", defect.query);
api.delete("/defect/:id", defect.deleteByID);
