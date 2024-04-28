import { Knex } from "knex";
import { v4 as uuid } from 'uuid'

declare module 'knex/types/tables' {
  export interface Tables {
    SONGS: {
      id: uuid;
      name: string;
      language: string;
      released: Date;
      duration: number;
    }
  }
}
