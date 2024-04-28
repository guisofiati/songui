import { KnexSongRepository } from "../../repositories/impl/knex/knex-song-repository";
import { DeleteSongUseCase } from "../song/delete";

export function makeDeleteSongUseCase() {
  const songRepository = new KnexSongRepository()
  return new DeleteSongUseCase(songRepository)
}
