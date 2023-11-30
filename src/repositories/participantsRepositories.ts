import { prisma } from "@/config/database";
import { participantDto } from "@/utils/types";

function createParticipant(body: participantDto){
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