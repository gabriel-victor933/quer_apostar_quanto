import express, { Response, Request} from "express"
import "express-async-errors"
import httpStatus from "http-status";
import gamesRouter from "./routers/gamesRouter"
import participantsRouter from "./routers/participantsRouter" 
import betsRouter from "./routers/betsRouter"
import {errorsHandler} from "./middlewares/errorsHandler";

const app = express()
app.use(express.json())

app.get("/health",(req: Request, res: Response) => res.status(httpStatus.OK).send("ok"));
app.use("/games",gamesRouter)
app.use("/participants",participantsRouter)
app.use("/bets",betsRouter)
// last one
app.use(errorsHandler)

export default app;