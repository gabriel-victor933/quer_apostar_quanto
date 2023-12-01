import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import gamesSchema from "@/schemas/gamesSchema";
import { postGames,getGames, getGameByid, finishGame } from "@/controllers/gamesControllers";
import { idParamSchema } from "@/schemas/idParamSchema";
import finishGameSchema from "@/schemas/finishGameSchema";

const route = Router()

route.get("/",getGames)
route.get("/:id",validateSchemaMiddleware(idParamSchema,"params"),getGameByid)
route.post("/",validateSchemaMiddleware(gamesSchema,"body"),postGames)
route.post("/:id/finish",validateSchemaMiddleware(finishGameSchema,"body"),validateSchemaMiddleware(idParamSchema,"params"),finishGame)

export default route