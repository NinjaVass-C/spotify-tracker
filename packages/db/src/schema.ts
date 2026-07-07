import {boolean, integer, jsonb, pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';

/**
 * Example table. Replace / extend with your real schema.
 * Every table you define here is picked up by drizzle-kit for migrations.
 */
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  displayName: text('display_name'),
  firstName: text('first_name'),
  lastName: text('last_name'),
  password: text('password').notNull(),
  accountActive: boolean('account_active').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const spotify_info = pgTable('spotify_info', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  accessToken: text('access_token').notNull(),
  refreshToken: text('refresh_token').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const application_log = pgTable('application_logs', {
  id: serial('id').primaryKey(),
  logType: text('log_type').notNull(),
  logAction: text('log_action').notNull(),
  logInfo: jsonb('log_info'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})


