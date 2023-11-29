import { Router } from "express";

const route = Router()

route.get("/",(req,res)=>res.send("oka"))
route.post("/",(req,res)=>res.send("oka"))

export default route