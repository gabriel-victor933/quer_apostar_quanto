import { Router } from "express";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import {sanatizeInputData} from "../middlewares/sanatizeInputData"
import participantsSchema from "../schemas/participantsSchema";
import getParticipantQuerySchema from "../schemas/getParticipantsQuerySchema";
import { createParticipant, getParticipants } from "../controllers/participantsControllers";

const route = Router()

route.get("/",validateSchemaMiddleware(getParticipantQuerySchema,"query"),getParticipants)
route.post("/",validateSchemaMiddleware(participantsSchema,"body"),sanatizeInputData("body"),createParticipant)

export default route