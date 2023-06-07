import { z } from "zod"

const CategoriesSchema = z.object({
  id: z.string().optional(),
  name: z.string()
})

export type Category = z.infer<typeof CategoriesSchema>

export default CategoriesSchema;
