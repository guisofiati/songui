import { KnexSongRepository } from "../../repositories/impl/knex/knex-song-repository";
import { InsertSongUseCase } from "../song/insert";

export function makeInsertSongUseCase() {
  const songRepository = new KnexSongRepository()
  return new InsertSongUseCase(songRepository)
}
