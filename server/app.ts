import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoutes } from "./routes/expenses";
import { serveStatic } from "hono/bun";
import { authRoute } from "./routes/auth";

const app = new Hono();

app.use("*", logger());

app.get("/test", (c) => {
  return c.json({ message: "test" });
});

const ApiRoutes = app
  .basePath("/api")
  .route("/expenses", expensesRoutes)
  .route("/", authRoute)

app.use("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/index.html" }));

export default app;
export type ApiRoutes = typeof ApiRoutes;