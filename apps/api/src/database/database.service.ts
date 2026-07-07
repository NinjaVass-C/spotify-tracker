import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { createDatabase, type Database } from '@spotifytracker/db';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
    private readonly client;

    public readonly db: Database;

    constructor() {
        const url = process.env.DATABASE_URL;

        if (!url) {
            throw new Error('DATABASE_URL is not set');
        }

        this.client = createDatabase(url);
        this.db = this.client.db;
    }

    async onModuleDestroy() {
        await this.client.connection.end();
    }
}