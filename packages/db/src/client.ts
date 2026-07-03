import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not set. Copy .env.example to .env and fill it in.');
}

/** Underlying postgres.js connection. Exposed for graceful shutdown / raw queries. */
export const connection = postgres(connectionString);

/** Drizzle client, typed with the full schema. Import this everywhere you query. */
export const db = drizzle(connection, { schema });

export type Database = typeof db;
