import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import participantsSchema from "@/schemas/participantsSchema";
const route = Router()

route.get("/",(req,res)=>res.send("oka"))
route.post("/",validateSchemaMiddleware(participantsSchema),(req,res)=>res.send("oka12"))

export default route