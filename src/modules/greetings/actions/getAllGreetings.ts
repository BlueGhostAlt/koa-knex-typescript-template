import knex from "../../../../db/knex";

import Greeting from "../types/Greeting";

export default () => knex.select().from<Greeting>("greetings");
