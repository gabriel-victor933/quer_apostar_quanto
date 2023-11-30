import betsServices from "@/services/betsServices"
import {Response, Request} from "express"
import httpStatus from "http-status"

export async function postBet(req: Request, res: Response){
        const bet = await betsServices.postBet(req.body)
        res.status(httpStatus.CREATED).send(bet)
}