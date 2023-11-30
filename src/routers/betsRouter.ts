import { Router } from "express";
import {validateSchemaMiddleware} from "@/middlewares/validateSchemaMiddleware";
import betsSchema from "@/schemas/betsSchema";
import { postBet } from "@/controllers/betsControllers";

const route = Router()

route.post("/",validateSchemaMiddleware(betsSchema,"body"),postBet)

export default route