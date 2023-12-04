import { Router } from "express";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import gamesSchema from "../schemas/gamesSchema";
import { postGames,getGames, getGameByid, finishGame } from "../controllers/gamesControllers";
import { idParamSchema } from "../schemas/idParamSchema";
import finishGameSchema from "../schemas/finishGameSchema";
import {sanatizeInputData} from "../middlewares/sanatizeInputData"


const route = Router()

route.get("/",getGames)
route.get("/:id",validateSchemaMiddleware(idParamSchema,"params"),getGameByid)
route.post("/",validateSchemaMiddleware(gamesSchema,"body"),sanatizeInputData("body"),postGames)
route.post("/:id/finish",validateSchemaMiddleware(finishGameSchema,"body"),validateSchemaMiddleware(idParamSchema,"params"),sanatizeInputData("body"),finishGame)

export default route