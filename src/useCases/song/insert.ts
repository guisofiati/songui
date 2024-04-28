import { SongRepository } from "../../repositories/song-repository";
import { EntityAlreadyExistsError } from "../errors/entity-already-exists-error";

interface InsertSongUseCaseRequest {
  name: string;
  language: string;
  released: Date;
  duration: number;
}

export class InsertSongUseCase {
  constructor(private readonly songRepository: SongRepository) {}

  async execute({ name, language, released, duration }: InsertSongUseCaseRequest) {
    const songAlreadyExists = await this.songRepository.findByExactName(name)
    if (songAlreadyExists) {
      throw new EntityAlreadyExistsError(`A song name "${name}" already exists. A song name must be unique.`)
    }

    return await this.songRepository.insert({
      name,
      language,
      released,
      duration,
    })
  }
}
