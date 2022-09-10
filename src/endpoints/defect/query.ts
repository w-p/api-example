import { FastifyReply, FastifyRequest } from "fastify";
// import qs from "qs"; // qs is a query string parsing library
import { getDB, readSQL } from "@/lib/db";
import { Defect, DefectSchema } from "@/models/defect";

const DB = getDB();
const QUERY = readSQL(`${process.env.PWD}/sql/defect/query.sql`);

export async function query(req: FastifyRequest, res: FastifyReply): Promise<void> {
  const results: Defect[] = [];
  // example with query params
  // const query = req.query as qs.ParsedQs;
  // const { after, before, system, code, severity, error } = query;

  // example with request body
  const body = req.body as Record<string, unknown>;
  const { after, before, system, code, severity, error } = body;

  const parameters = [after, before, system, code, severity, error];
  const response = await DB.query(QUERY, parameters);

  for (const row of response.rows) {
    const item = await DefectSchema.validate(row);
    results.push(item);
  }

  res.send(results);
}
