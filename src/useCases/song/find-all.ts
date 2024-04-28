import { SongRepository } from "../../repositories/song-repository";

export class FindAllSongsUseCase {
  constructor(private readonly songRepository: SongRepository) {}

  async execute() {
    return await this.songRepository.findAll();
  }
}
