import { FastifyInstance } from "fastify";
import { cookieHandler } from "./cookieController";

export const cookieRoutes = (server: FastifyInstance) => {
  server.post("/", cookieHandler);
};
