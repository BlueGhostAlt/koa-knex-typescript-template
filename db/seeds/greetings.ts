import Knex from "knex";

import greetings from "./examples/greetings";

export const seed = async (knex: Knex) => {
    await knex("greetings").del();
    return knex("greetings").insert(greetings);
};
