import { FastifyInstance } from "fastify";
import { cookieRoutes } from "./modules/cookie/cookieRoute";

export async function registerRoutes(fastify: FastifyInstance) {
  await fastify.register(cookieRoutes, { prefix: "/api/cookie" });
}
