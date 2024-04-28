import { SongRepository } from "../../repositories/song-repository";
import { EntityAlreadyExistsError } from "../errors/entity-already-exists-error";
import { EntityNotFoundError } from "../errors/entity-not-found-error";

interface UpdateSongUseCaseRequest {
  name?: string | undefined;
  language?: string | undefined;
  released?: Date | undefined;
  duration?: number | undefined;
}

export class UpdateSongUseCase {
  constructor(private readonly songRepository: SongRepository) {}

  async execute(id: string, { name, language, released, duration }: UpdateSongUseCaseRequest) {

    const songExists = await this.songRepository.findById(id);
    if (!songExists) {
      throw new EntityNotFoundError(`Song id ${id} does not exists.`);
    }

    if (name) {
      const songAlreadyExists = await this.songRepository.findByExactName(name)
      if (songAlreadyExists) {
        throw new EntityAlreadyExistsError(`A song name "${name}" already exists. A song name must be unique.`)
      }
    }

    return await this.songRepository.update(id, {
      name,
      language,
      released,
      duration,
    })
  }
}
