import { FastifyInstance } from "fastify";
import { cookieGetHandler, cookiePostHandler } from "./cookieController";

export const cookieRoutes = (server: FastifyInstance) => {
  server.post("/", cookiePostHandler);
  server.get("/", cookieGetHandler);
};
