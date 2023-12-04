import { Router } from "express";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import {sanatizeInputData} from "../middlewares/sanatizeInputData"
import participantsSchema from "../schemas/participantsSchema";
import { createParticipant, getParticipants } from "../controllers/participantsControllers";

const route = Router()

route.get("/",getParticipants)
route.post("/",validateSchemaMiddleware(participantsSchema,"body"),sanatizeInputData("body"),createParticipant)

export default route