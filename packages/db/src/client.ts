import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

export function createDatabase(connectionString: string) {
  const connection = postgres(connectionString);

  return {
    connection,
    db: drizzle(connection, { schema }),
  };
}

export type DatabaseClient = ReturnType<typeof createDatabase>;
export type Database = DatabaseClient['db'];