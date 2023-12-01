import { participantDto } from "../utils/types";
import { participantRepositories } from "../repositories/participantsRepositories";
import { notFoundException } from "../errors/commonErrors";

async function createParticipant(body: participantDto){
    return await participantRepositories.createParticipant(body)
}

async function getParticipants(){
    const participants = await participantRepositories.getParticipants()
    if(participants.length == 0) throw notFoundException("Participants Not Found!")
    return participants
}

export const participantServices = {
    createParticipant,
    getParticipants
}
