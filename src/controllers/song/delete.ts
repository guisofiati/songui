import { Request, Response } from "express";
import { z } from "zod";
import { makeDeleteSongUseCase } from "../../useCases/factories/make-delete-song";
import { EntityNotFoundError } from "../../useCases/errors/entity-not-found-error";

export async function del(request: Request, response: Response) {
  const deleteSongParamsSchema = z.object({
    id: z.string()
  })
  const { id } = deleteSongParamsSchema.parse(request.params)

  try {
    const deleteSongUseCase = makeDeleteSongUseCase()
    await deleteSongUseCase.execute(id)
    return response.status(204).send()
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      return response.status(404).send({
        message: err.message
      })
    }
  }
}
