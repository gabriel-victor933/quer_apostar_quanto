import express, { Response, Request} from "express"
import httpStatus from "http-status";
import gamesRouter from "./routers/gamesRouter"
import participantsRouter from "./routers/participantsRouter" 
import betsRouter from "./routers/betsRouter"

const app = express()
app.use(express.json())

app.get("/health",(req: Request, res: Response) => res.status(httpStatus.OK).send("ok"));
app.use("/games",gamesRouter)
app.use("/participants",participantsRouter)
app.use("/bets",betsRouter)

export default app;