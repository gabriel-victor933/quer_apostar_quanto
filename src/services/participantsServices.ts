import { participant } from "@/utils/types";
import { participantRepositories } from "@/repositories/participantsRepositories";

async function createParticipant(body: participant){
    return await participantRepositories.createParticipant(body)
}

export const participantServices = {
    createParticipant
}
