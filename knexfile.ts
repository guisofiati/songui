import { Knex } from "knex";
import path from "path";
import { env } from "./src/env";

const config: Knex.Config = {
  client: 'pg',
  connection: {
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    database: env.DATABASE_NAME
  },
  migrations: {
    extension: 'ts',
    directory: path.resolve(__dirname, './src/db/migrations')
  },
  seeds: {
    extension: 'ts',
    directory: path.resolve(__dirname, './src/db/seeds')
  }
}

export default config
