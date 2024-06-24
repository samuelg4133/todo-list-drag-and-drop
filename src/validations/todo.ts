import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const schema = z.object({
  id: z.string().uuid(),
  title: z
    .string({
      errorMap: () => ({ message: "Valor inválido." }),
    })
    .trim()
    .min(2, "Digite pelo menos 2 caraceteres.")
    .max(255, "Máximo de 255 caracteres."),
  description: z
    .string({
      errorMap: () => ({ message: "Valor inválido." }),
    })
    .trim()
    .max(255, "Máximo de 255 caracteres.")
    .nullish(),
});

export const todoSchema = zodResolver(schema);
export type TodoSchemaProps = z.infer<typeof schema>;
