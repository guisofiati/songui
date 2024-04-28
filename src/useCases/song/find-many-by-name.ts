import { SongRepository } from "../../repositories/song-repository";

export class FindManySongsByNameUseCase {
  constructor(private readonly songRepository: SongRepository) {}

  async execute(name: string) {
    const songs = await this.songRepository.findManyByName(name)
    return songs
  }
}
