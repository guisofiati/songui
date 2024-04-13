import 'dotenv/config'
import { z } from "zod";
import { config } from "dotenv";

// Jest & Vitest changes NODE_ENV to 'test' when running
if (process.env.NODE_ENV === 'test') {
  config({
    path: '.env.test'
  })
} else config()

export const envSchema = z.object({
  NODE_ENV: z.enum(['test', 'development', 'production']).default('development'),
  PORT: z.coerce.number(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.coerce.number(),
  DATABASE_NAME: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log('🛑 Error: Invalid environment variable', _env.error.format())
  throw new Error('🛑 Error: Invalid environment variable')
}

export const env = _env.data
