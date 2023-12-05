import { Router } from "express";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import gamesSchema from "../schemas/gamesSchema";
import { postGames,getGames, getGameByid, finishGame } from "../controllers/gamesControllers";
import { idParamSchema } from "../schemas/idParamSchema";
import finishGameSchema from "../schemas/finishGameSchema";
import getGamesQuerySchema from "../schemas/getGamesQuerySchema";
import {sanatizeInputData} from "../middlewares/sanatizeInputData"


const route = Router()

route.get("/",validateSchemaMiddleware(getGamesQuerySchema,"query"),getGames)
route.get("/:id",validateSchemaMiddleware(idParamSchema,"params"),getGameByid)
route.post("/",validateSchemaMiddleware(gamesSchema,"body"),sanatizeInputData("body"),postGames)
route.post("/:id/finish",validateSchemaMiddleware(idParamSchema,"params"),validateSchemaMiddleware(finishGameSchema,"body"),finishGame)

export default route