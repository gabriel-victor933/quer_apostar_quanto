import { Response, Request } from "express"
import { participantServices } from "@/services/participantsServices"
import httpStatus from "http-status"

export async function createParticipant(req: Request, res: Response){
    const result = await participantServices.createParticipant(req.body)
    res.status(httpStatus.CREATED).send(result)
}