import app from "./app";

const PORT = process.env.PORT || 3000;

const server = Bun.serve({
    fetch: app.fetch,
  });
  

console.log(`Listening on http://localhost:${server.port} ...`);
