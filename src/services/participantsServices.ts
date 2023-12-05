import { participantDto } from "../utils/types";
import { participantRepositories } from "../repositories/participantsRepositories";
import { notFoundException } from "src/errors/commonErrors";

async function createParticipant(body: participantDto){
    return await participantRepositories.createParticipant(body)
}

async function getParticipants(page?:number){
    const participants = await participantRepositories.getParticipants(page)
    return participants
}

async function getParticipantsBet(id: number) {
    const participant = await participantRepositories.getParticipantsBet(id)
    if(!participant) throw notFoundException("Participant Not Found check the id!")
    return participant.bets
}

async function postCredit(id: number, credit: number){
    const participant = await participantRepositories.postCredit(id,credit)
    if(!participant) throw notFoundException()
    return participant
}

export const participantServices = {
    createParticipant,
    getParticipants,
    getParticipantsBet,
    postCredit
}
