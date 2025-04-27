import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./.migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: `postgresql://${env.DB_USER}:${env.DB_PASSWORD}@localhost:${env.DB_PORT}/${env.DB_NAME}`,
  },
});
