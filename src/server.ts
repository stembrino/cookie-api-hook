import Fastify from "fastify";
import { registerRoutes } from "./routesRegister";
// import { writeFile, readFile } from "fs-extra";
// import path from "path";

const fastify = Fastify({ logger: true });

// Define the file path where data will be stored
// const dataFilePath = path.join(__dirname, "plugin-data.json");

fastify.get("/check", (request, reply) => {
  reply.status(200).send({ ok: true });
});

// Route to receive the plugin request and store the body in the filesystem
// fastify.post("/plugin-data", async (request, reply) => {
//   const data = request.body;

//   try {
//     // Store the request body in a file
//     await writeFile(dataFilePath, JSON.stringify(data, null, 2));
//     fastify.log.info("Data saved to plugin-data.json");

//     return { status: "success", message: "Data stored successfully" };
//   } catch (err) {
//     fastify.log.error("Error writing to file:", err);
//     return reply.status(500).send({ status: "error", message: "Failed to store data" });
//   }
// });

// Route to interact with Insomnia or other clients (e.g., fetching the saved data)
// fastify.get("/plugin-data", async (request, reply) => {
//   try {
//     // Read the saved data
//     const data = await readFile(dataFilePath, "utf-8");
//     return { status: "success", data: JSON.parse(data) };
//   } catch (err) {
//     fastify.log.error("Error reading from file:", err);
//     return reply.status(500).send({ status: "error", message: "Failed to retrieve data" });
//   }
// });

// Start the server
const start = async () => {
  try {
    await registerRoutes(fastify);
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    fastify.log.info("Server running at http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
