import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import participantsSchema from "@/schemas/participantsSchema";
import { createParticipant } from "@/controllers/participantsControllers";

const route = Router()

route.get("/",(req,res)=>res.send("oka"))
route.post("/",validateSchemaMiddleware(participantsSchema),createParticipant)

export default route