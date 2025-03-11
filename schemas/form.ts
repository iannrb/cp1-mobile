import { z } from "zod";

export const increaseFormSchema = z.object({
    name: z.string().min(2, {
        message: "O nome precisa de pelo menos 2 caracteres!"
    }).max(30, {
        message: "O nome precisa ao máximo 30 caracteres!"
    }),
    value: z.number({
        message: "O valor é obrigatório!"
    }).nonnegative({
        message: "O valor não pode ser negativo!"
    }),
    increase: z.number({
        message: "A taxa de aumento é obrigatória!"
    }).nonnegative({
        message: "A taxa não pode ser negativa!"
    })
})

export type IncreaseFormSchema = z.infer<typeof increaseFormSchema>
