import Knex from "knex";

export const up = async (knex: Knex) =>
    knex.schema.createTable("greetings", table => {
        table.increments("id");
        table.string("message").notNullable();
    });

export const down = async (knex: Knex) => knex.schema.dropTable("greetings");
