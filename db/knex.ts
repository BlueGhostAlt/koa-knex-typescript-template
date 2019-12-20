import Knex, { Config } from "knex";

import * as configs from "../knexfile";

const environment = process.env.NODE_ENV || "development";
const environmentConfig = (configs as any)[environment];

const knex = Knex(environmentConfig as Config);

export default knex;
