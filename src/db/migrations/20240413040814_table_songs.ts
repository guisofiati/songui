import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('SONGS', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('language').notNullable();
    table.date('released').notNullable();
    table.bigInteger('duration').notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('SONGS');
}
