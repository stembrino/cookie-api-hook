import { FastifyReply, FastifyRequest } from "fastify";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { CookieDto } from "./dto/CookieDto";

const dataFilePath = path.join(__dirname, "../../data/cookie.json");

export const cookiePostHandler = async (
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

export const cookieGetHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const data: CookieDto = JSON.parse(await readFile(dataFilePath, "utf-8"));
    reply.status(200).send({
      key: data.key,
      cookie: data.cookie,
    } as CookieDto);
  } catch (error) {
    console.log(error);
    reply.status(500).send({ error: "Could not read the file." });
  }
};
