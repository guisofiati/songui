import { KnexSongRepository } from "../../repositories/impl/knex/knex-song-repository";
import { FindAllSongsUseCase } from "../song/find-all";

export function makeFindAllSongsUseCase() {
  const songRepository = new KnexSongRepository()
  return new FindAllSongsUseCase(songRepository)
}
