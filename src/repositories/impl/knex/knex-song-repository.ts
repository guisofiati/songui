import { Song } from "../../../models/song";
import { SongRepository } from "../../song-repository";
import database from "../../../db/database"

export class KnexSongRepository implements SongRepository {
  async insert(data: Song): Promise<Song> {
    const [song] = await database('SONGS').insert(data).returning('*')
    return song
  }

  async findAll(): Promise<Song[]> {
    return await database('SONGS').select('*').returning('*')
  }

  async findById(id: string): Promise<Song | null> {
    return await database('SONGS').select('*').where({ id }).first() ?? null
  }

  async findManyByName(name: string): Promise<Song[] | null> {
    return await database('SONGS').select('*').whereILike('name', `%${name}%`)
  }

  async findByExactName(name: string): Promise<Song | null> {
    return await database('SONGS').select('*').where({ name }).first() ?? null
  }

  async update(id: string, data: Partial<Song>): Promise<Song | null> {
    const [song] = await database('SONGS').update(data).where({ id }).returning('*')
    return song
  }

  async delete(id: string): Promise<void> {
    await database('SONGS').where({ id }).del()
  }
}
