import { Request, Response } from "express";
import { z } from "zod";
import { makeInsertSongUseCase } from "../../useCases/factories/make-insert-song";
import { EntityAlreadyExistsError } from "../../useCases/errors/entity-already-exists-error";

export async function insert(request: Request, response: Response) {
  const insertSongBodySchema = z.object({
    name: z.string(),
    language: z.string(),
    released: z.coerce.date().refine(data => data < new Date(),
      { message: 'Song date must be in the past' }),
    duration: z.number().min(30000).max(3600000)
  })
  const song = insertSongBodySchema.parse(request.body)

  try {
    const insertSongUseCase = makeInsertSongUseCase()
    await insertSongUseCase.execute(song)
    return response.status(201).send(song)
  } catch (err) {
    if (err instanceof EntityAlreadyExistsError) {
      return response.status(400).send({
        message: err.message
      })
    }
  }
}
