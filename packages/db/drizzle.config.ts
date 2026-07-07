import { defineConfig } from 'drizzle-kit';

console.log('DB: ' , process.env.DATABASE_URL);

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
