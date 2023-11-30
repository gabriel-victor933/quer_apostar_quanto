import { participantDto } from "@/utils/types";
import { participantRepositories } from "@/repositories/participantsRepositories";

async function createParticipant(body: participantDto){
    return await participantRepositories.createParticipant(body)
}

async function getParticipants(){
    return await participantRepositories.getParticipants()
}

export const participantServices = {
    createParticipant,
    getParticipants
}
