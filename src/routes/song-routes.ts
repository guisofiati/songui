import { Router } from "express";
import { insert } from "../controllers/song/insert";
import { findAll } from "../controllers/song/find-all";
import { findManyByName } from "../controllers/song/find-many-by-name";
import { update } from "../controllers/song/update";
import { del } from "../controllers/song/delete";

export const songRoutes = Router()

songRoutes.post('/', insert)
songRoutes.get('/', findAll)
songRoutes.get('/:name', findManyByName)
songRoutes.put('/:id', update)
songRoutes.delete('/:id', del)
