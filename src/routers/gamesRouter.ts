import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import gamesSchema from "@/schemas/gamesSchema";
import { postGames,getGames } from "@/controllers/gamesControllers";

const route = Router()

route.get("/",getGames)
route.get("/:id",(req,res)=>res.send("oka1"))
route.post("/",validateSchemaMiddleware(gamesSchema),postGames)
route.post("/:id/finish",(req,res)=>res.send("oka1"))

export default route