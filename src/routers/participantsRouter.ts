import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import participantsSchema from "@/schemas/participantsSchema";
import { createParticipant, getParticipants } from "@/controllers/participantsControllers";

const route = Router()

route.get("/",getParticipants)
route.post("/",validateSchemaMiddleware(participantsSchema),createParticipant)

export default route