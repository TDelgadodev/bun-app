import { Hono } from "hono";
import { fakeExpenses } from "../data/expenses";
import type { Expense } from "../types/Expense";

export const expensesRoutes = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const expense: Expense = await c.req.json();
    return c.json(expense);
  });
