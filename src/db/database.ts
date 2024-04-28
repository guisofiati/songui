import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config)
export default knexInstance
