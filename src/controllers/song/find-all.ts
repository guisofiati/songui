import { Request, Response } from "express";
import { makeFindAllSongsUseCase } from "../../useCases/factories/make-find-all-songs";

export async function findAll(request: Request, response: Response) {
  const findAllSongsUseCase = makeFindAllSongsUseCase()
  const songs = await findAllSongsUseCase.execute()
  return response.send(songs)
}
