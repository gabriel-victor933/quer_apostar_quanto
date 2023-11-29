import { prisma } from "@/config/database";
import { participant } from "@/utils/types";

function createParticipant(body: participant){
    return prisma.participant.create({
        data: body
    })
}

function getParticipants(){
    return prisma.participant.findMany();
}

export  const participantRepositories = {
    createParticipant,
    getParticipants
}