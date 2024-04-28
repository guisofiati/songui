import { KnexSongRepository } from "../../repositories/impl/knex/knex-song-repository";
import { UpdateSongUseCase } from "../song/update";

export function makeUpdateSongUseCase() {
  const songRepository = new KnexSongRepository()
  return new UpdateSongUseCase(songRepository)
}
