import { Song } from "../models/song";

export interface SongRepository {
  insert(data: Song): Promise<Song>
  findAll(): Promise<Song[]>
  findById(id: string): Promise<Song | null>
  findManyByName(name: string): Promise<Song[] | null>
  findByExactName(name: string): Promise<Song | null>
  update(id: string, data: Partial<Song>): Promise<Song | null>
  delete(id: string): Promise<void>
}
