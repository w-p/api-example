import { FastifyReply, FastifyRequest } from "fastify";
import { getDB, readSQL } from "@/lib/db";

const DB = getDB();
const QUERY = readSQL(`${process.env.PWD}/sql/defect/delete.sql`);

export async function deleteByID(req: FastifyRequest, res: FastifyReply): Promise<void> {
  const params = req.params as Record<string, string>;
  const parameters = [params.id];
  await DB.query(QUERY, parameters);
}
