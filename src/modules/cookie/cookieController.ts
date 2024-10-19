import { FastifyReply, FastifyRequest } from "fastify";
import { writeFile } from "fs/promises";
import path from "path";
import { CookieDto } from "./dto/CookieDto";

const dataFilePath = path.join(__dirname, "../../data/cookie.json");

export const cookieHandler = async (
  request: FastifyRequest<{ Body: CookieDto }>,
  reply: FastifyReply,
) => {
  const { key, cookie } = request.body;
  try {
    await writeFile(dataFilePath, JSON.stringify({ key, cookie }));
    reply.status(200).send({
      success: true,
    });
  } catch (err) {
    console.error("Error writing to file:", err);
    return reply.status(500).send({ success: false });
  }
};
