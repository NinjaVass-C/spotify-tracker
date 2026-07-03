import { Injectable } from '@nestjs/common';

// The shared database client is available from the workspace `db` package:
//
//   import { db, schema } from '@spotifytracker/db';
//   const users = await db.select().from(schema.users);
//
// It's left out of the default health check so the API can boot without a
// database configured. Wire it in once your Postgres instance is running.

@Injectable()
export class AppService {
  getHealth() {
    return { status: 'ok', service: 'api', timestamp: new Date().toISOString() };
  }
}
