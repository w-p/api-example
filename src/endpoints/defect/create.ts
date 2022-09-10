import { FastifyReply, FastifyRequest } from "fastify";
import { getDB, readSQL } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import { Defect, DefectSchema } from "@/models/defect";

const DB = getDB();
const QUERY = readSQL(`${process.env.PWD}/sql/defect/insert.sql`);

export async function create(req: FastifyRequest, res: FastifyReply): Promise<void> {
  const results: Defect[] = [];

  const body = req.body as Record<string, unknown>;
  const { system, code, severity, error } = body;

  const id = uuidv4();
  const timestamp = Math.floor(+new Date() / 1000);
  const parameters = [id, timestamp, system, code, severity, error];
  const response = await DB.query(QUERY, parameters);

  for (const row of response.rows) {
    const item = await DefectSchema.validate(row);
    results.push(item);
  }

  res.send(results);
}
