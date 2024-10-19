import { FastifyInstance } from "fastify";
import { insomniaRoutes } from "./modules/insomnia/insomniaRoute";
import { cookieRoutes } from "./modules/cookie/cookieRoute";

export async function registerRoutes(fastify: FastifyInstance) {
  await fastify.register(insomniaRoutes, { prefix: "/api/insomnia" });
  await fastify.register(cookieRoutes, { prefix: "/api/cookie" });
}
