import { Router } from "express";
import { songRoutes } from "./song-routes";

export const router = Router()

router.use('/api/songs', songRoutes)
