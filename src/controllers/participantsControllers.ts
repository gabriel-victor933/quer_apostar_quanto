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