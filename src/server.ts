import Fastify from "fastify";
import { registerRoutes } from "./routesRegister";

const fastify = Fastify({ logger: true });

fastify.get("/check", (request, reply) => {
  reply.status(200).send({ ok: true });
});

const start = async () => {
  try {
    await registerRoutes(fastify);
    await fastify.listen({ port: 3003, host: "0.0.0.0" });
    fastify.log.info("Server running at http://localhost:3003");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
