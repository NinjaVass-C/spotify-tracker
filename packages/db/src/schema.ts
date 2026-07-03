import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

/**
 * Example table. Replace / extend with your real schema.
 * Every table you define here is picked up by drizzle-kit for migrations.
 */
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  displayName: text('display_name'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
