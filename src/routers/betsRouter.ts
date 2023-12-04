import { Router } from "express";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import betsSchema from "../schemas/betsSchema";
import { postBet } from "../controllers/betsControllers";
import {sanatizeInputData} from "../middlewares/sanatizeInputData"


const route = Router()

route.post("/",validateSchemaMiddleware(betsSchema,"body"),sanatizeInputData("body"),postBet)

export default route