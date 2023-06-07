import { z } from "zod"

const CategoriesSchema = z.object({
  id: z.number().optional(),
  name: z.string()
})

export type Category = z.infer<typeof CategoriesSchema>

export default CategoriesSchema;
