import express, { Response, Request} from "express"
import httpStatus from "http-status";

const app = express()

app.get("/health",(req: Request, res: Response) => res.status(httpStatus.OK).send("ok"));

export default app;