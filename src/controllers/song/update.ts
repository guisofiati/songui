import { Request, Response } from "express";
import { z } from "zod";
import { EntityAlreadyExistsError } from "../../useCases/errors/entity-already-exists-error";
import { makeUpdateSongUseCase } from "../../useCases/factories/make-update-song";
import { EntityNotFoundError } from "../../useCases/errors/entity-not-found-error";

export async function update(request: Request, response: Response) {
  const updateSongParamsSchema = z.object({
    id: z.string()
  })
  const updateSongBodySchema = z.object({
    name: z.string().optional(),
    language: z.string().optional(),
    released: z.coerce.date().refine(data => data < new Date(),
      { message: 'Song date must be in the past' }).optional(),
    duration: z.number().min(30000).max(3600000).optional()
  })
  const { id } = updateSongParamsSchema.parse(request.params)
  const song = updateSongBodySchema.parse(request.body)

  try {
    const updateSongUseCase = makeUpdateSongUseCase()
    const songUpdated = await updateSongUseCase.execute(id, song)
    return response.status(200).send(songUpdated)
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return response.status(404).send({
        message: err.message
      })
    }
    if (err instanceof EntityAlreadyExistsError) {
      return response.status(400).send({
        message: err.message
      })
    }
  }
}
