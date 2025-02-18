import { z } from "zod";

const refreshSchema = z.object({
  refreshToken: z.string({ required_error: 'Refresh token was not provided.' })
})

export default refreshSchema;