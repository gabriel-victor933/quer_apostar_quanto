import { Router } from "express";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import {sanatizeInputData} from "../middlewares/sanatizeInputData"
import participantsSchema from "../schemas/participantsSchema";
import getParticipantQuerySchema from "../schemas/getParticipantsQuerySchema";
import { createParticipant, getParticipants, getParticipantsBet } from "../controllers/participantsControllers";
import { idParamSchema } from "src/schemas/idParamSchema";

const route = Router()

route.get("/",validateSchemaMiddleware(getParticipantQuerySchema,"query"),getParticipants)
route.post("/",validateSchemaMiddleware(participantsSchema,"body"),sanatizeInputData("body"),createParticipant)
route.get("/:id/bets",validateSchemaMiddleware(idParamSchema,"params"),getParticipantsBet)


export default route