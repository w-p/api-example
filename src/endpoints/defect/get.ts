import { FastifyReply, FastifyRequest } from "fastify";
import { getDB, readSQL } from "@lib/db";
import { Defect, DefectSchema } from "@/models/defect";

const DB = getDB();
const QUERY = readSQL("defect/all.sql");

export async function get(req: FastifyRequest, res: FastifyReply): Promise<void> {
  const results: Defect[] = [];

  const response = await DB.query(QUERY);

  for (const row of response.rows) {
    const item = await DefectSchema.validate(row);
    results.push(item);
  }

  res.send(results);
}
