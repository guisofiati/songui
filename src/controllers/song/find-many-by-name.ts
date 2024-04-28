import { Request, Response } from "express";
import { z } from "zod";
import { makeFindManySongsByNameUseCase } from "../../useCases/factories/make-find-many-songs-by-name";

export async function findManyByName(request: Request, response: Response) {
  const insertSongBodySchema = z.object({
    name: z.string()
  })
  const { name } = insertSongBodySchema.parse(request.params)

  const findSongByNameUseCase = makeFindManySongsByNameUseCase()
  const songs = await findSongByNameUseCase.execute(name)
  return response.send(songs)
}
