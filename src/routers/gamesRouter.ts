import { Router } from "express";

const route = Router()

route.get("/",(req,res)=>res.send("oka"))
route.get("/:id",(req,res)=>res.send("oka1"))
route.post("/",(req,res)=>res.send("oka"))
route.post("/:id/finish",(req,res)=>res.send("oka1"))

export default route