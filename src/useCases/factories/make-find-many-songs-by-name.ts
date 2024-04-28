import { KnexSongRepository } from "../../repositories/impl/knex/knex-song-repository";
import { FindManySongsByNameUseCase } from "../song/find-many-by-name";

export function makeFindManySongsByNameUseCase() {
  const songRepository = new KnexSongRepository()
  return new FindManySongsByNameUseCase(songRepository)
}
