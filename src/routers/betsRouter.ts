import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import betsSchema from "@/schemas/betsSchema";

const route = Router()

route.post("/",validateSchemaMiddleware(betsSchema,"body"),(req,res)=>res.send("post bets"))

export default route