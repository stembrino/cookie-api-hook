import { FastifyReply, FastifyRequest } from "fastify";
import path from "path";
import { readFile } from "fs/promises";
import { CookieDto } from "../cookie/dto/CookieDto";

const dataFilePath = path.join(__dirname, "../../data/cookie.json");

export const insomniaHandler = async (request: FastifyRequest, reply: FastifyReply) => {
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
