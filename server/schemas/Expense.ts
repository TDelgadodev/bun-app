import { z } from "zod";


export const expenseShema = z.object({
    id: z.number().int().positive().min(1),
    title: z.string().min(3).max(100),
    amount: z.number().int().positive(),
})

export const createPostSchema = expenseShema.omit({ id: true })
