import { z } from "zod"

const CategoriesSchema = z.object({
  name: z.string()
})

export type Category = z.infer<typeof CategoriesSchema>

export default CategoriesSchema;
