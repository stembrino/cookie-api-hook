import { FastifyInstance } from "fastify";
import { insomniaHandler } from "./insomniaController";

export const insomniaRoutes = (server: FastifyInstance) => {
  server.get("/", insomniaHandler);
};
