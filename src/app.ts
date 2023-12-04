import express, { Response, Request} from "express"
require("express-async-errors")
import cors from "cors"
import {errorsHandler} from "./middlewares/errorsHandler";
import httpStatus from "http-status";
import gamesRouter from "./routers/gamesRouter"
import participantsRouter from "./routers/participantsRouter" 
import betsRouter from "./routers/betsRouter"

import { connectDb } from "./config/database";

connectDb()
    .then(()=>{console.log("connected!")});

const app = express()


app.use(express.json())
app.use(cors())

app.get("/health",(req: Request, res: Response) => res.status(httpStatus.OK).send("ok"));
app.use("/games",gamesRouter)
app.use("/participants",participantsRouter)
app.use("/bets",betsRouter)
// last one
app.use(errorsHandler)
export default app;