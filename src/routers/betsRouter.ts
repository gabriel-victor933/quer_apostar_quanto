import { Router } from "express";

const route = Router()

route.post("/",(req,res)=>res.send("post bets"))

export default route