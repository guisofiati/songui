import { SongRepository } from "../../repositories/song-repository";
import { EntityNotFoundError } from "../errors/entity-not-found-error";

export class DeleteSongUseCase {
  constructor(private readonly songRepository: SongRepository) {}

  async execute(id: string) {
    const songExists = await this.songRepository.findById(id);
    if (!songExists) {
      throw new EntityNotFoundError(`Song id ${id} does not exists.`);
    }

    return await this.songRepository.delete(id)
  }
}
