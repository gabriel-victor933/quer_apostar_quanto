import { prisma } from "../config/database";
import { participantDto } from "../utils/types";

function createParticipant(body: participantDto){
    return prisma.participant.create({
        data: {
            name: body.name,
            balance: typeof(body.balance) == "number"? body.balance : parseInt(body.balance)
        }
    })
}

function getParticipants(page?:number){
    return prisma.participant.findMany({
        take: 10,
        skip: 10*(page-1)
    });
}

export  const participantRepositories = {
    createParticipant,
    getParticipants
}