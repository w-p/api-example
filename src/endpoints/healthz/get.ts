import { FastifyReply, FastifyRequest } from "fastify";
import { getDB } from "@/lib/db";

const DB = getDB();
const QUERY = "select 1";

export async function get(req: FastifyRequest, res: FastifyReply): Promise<void> {
  const result = { status: "healthy", info: "none" };

  try {
    await DB.query(QUERY);
  } catch (err) {
    res.send(err);
    return;
  }

  res.send(result);
}
