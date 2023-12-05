import { Router } from "express";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import {sanatizeInputData} from "../middlewares/sanatizeInputData"
import participantsSchema from "../schemas/participantsSchema";
import getParticipantQuerySchema from "../schemas/getParticipantsQuerySchema";
import { createParticipant, getParticipants, getParticipantsBet,postCredit } from "../controllers/participantsControllers";
import { idParamSchema } from "../schemas/idParamSchema";
import postCreditSchema from "../schemas/postCreditSchema";

const route = Router()

route.get("/",validateSchemaMiddleware(getParticipantQuerySchema,"query"),getParticipants)
route.post("/",validateSchemaMiddleware(participantsSchema,"body"),sanatizeInputData("body"),createParticipant)
route.get("/:id/bets",validateSchemaMiddleware(idParamSchema,"params"),getParticipantsBet)
route.post("/:id/credit",validateSchemaMiddleware(idParamSchema,"params"),validateSchemaMiddleware(postCreditSchema,"body"),postCredit)


export default route