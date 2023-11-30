import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import gamesSchema from "@/schemas/gamesSchema";
import { postGames,getGames } from "@/controllers/gamesControllers";
import { idParamSchema } from "@/schemas/idParamSchema";

const route = Router()

route.get("/",getGames)
route.get("/:id",validateSchemaMiddleware(idParamSchema,"params"),(req,res)=>res.send(req.params))
route.post("/",validateSchemaMiddleware(gamesSchema,"body"),postGames)
route.post("/:id/finish",(req,res)=>res.send("oka1"))

export default route