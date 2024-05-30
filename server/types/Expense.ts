import type { z } from "zod";
import type { expenseShema } from "../schemas/Expense";

export type Expense = z.infer<typeof expenseShema>;
