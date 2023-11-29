import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import gamesSchema from "@/schemas/gamesSchema";

const route = Router()

route.get("/",(req,res)=>res.send("oka"))
route.get("/:id",(req,res)=>res.send("oka1"))
route.post("/",validateSchemaMiddleware(gamesSchema),(req,res)=>res.send("oka"))
route.post("/:id/finish",(req,res)=>res.send("oka1"))

export default route