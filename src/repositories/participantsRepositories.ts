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

function getParticipants(){
    return prisma.participant.findMany();
}

export  const participantRepositories = {
    createParticipant,
    getParticipants
}