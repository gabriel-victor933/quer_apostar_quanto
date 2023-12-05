import { Response, Request } from "express"
import { participantServices } from "../services/participantsServices"
import httpStatus from "http-status"

export async function createParticipant(req: Request, res: Response){
    const result = await participantServices.createParticipant(req.body)
    res.status(httpStatus.CREATED).send(result)
}

export async function getParticipants(req: Request &  {query: {page?: string}}, res: Response){
    const page = req.query.page || "1"
    const participants = await participantServices.getParticipants(parseInt(page))
    res.status(httpStatus.OK).send(participants)
}

export async function getParticipantsBet(req: Request &  {id?: number}, res: Response){
    const bets = await participantServices.getParticipantsBet(req.id)
    res.status(httpStatus.OK).send(bets)
}

export async function postCredit(req: Request &  {id?: number} & {body: {credit: number}}, res: Response){
    const credit = parseInt(req.body.credit)
    const result = await participantServices.postCredit(req.id,credit)
    res.status(httpStatus.OK).send(result)
}   