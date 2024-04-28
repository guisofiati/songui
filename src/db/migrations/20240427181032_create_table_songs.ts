import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('SONGS', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('name').notNullable().unique();
      table.string('language').notNullable();
      table.date('released').notNullable();
      table.bigInteger('duration').notNullable();
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('SONGS');
}
