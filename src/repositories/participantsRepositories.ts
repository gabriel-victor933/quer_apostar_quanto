import { prisma } from "@/config/database";
import { participant } from "@/utils/types";

async function createParticipant(body: participant){
    return prisma.participant.create({
        data: body
    })
}

export  const participantRepositories = {
    createParticipant,

}