import { FastifyReply, FastifyRequest } from "fastify";
import { QueryCookieDto } from "./dto/QueryCookieDTO";
import { writeFile } from "fs/promises";
import path from "path";

const dataFilePath = path.join(__dirname, "../../data/cookie.json");

export const cookieHandler = async (
  request: FastifyRequest<{ Body: QueryCookieDto }>,
  reply: FastifyReply,
) => {
  const { value } = request.body;
  try {
    await writeFile(dataFilePath, JSON.stringify({ cookie: value }));
    reply.status(200).send({
      success: true,
    });
  } catch (err) {
    console.error("Error writing to file:", err);
    return reply.status(500).send({ success: false });
  }
};
