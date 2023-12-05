import { notFoundException } from "../errors/commonErrors";
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

function getParticipantsBet(id: number){
    return prisma.participant.findFirst({
        where: {id},
        include: {bets: true}
    })
}

function postCredit(id: number,credit: number){
    return prisma.$transaction(async (tx)=> {

        const participant = await tx.participant.findUnique({where: {id}})

        if(!participant) throw notFoundException("Participant not Found check the id!")

        return tx.participant.update({
            where: {id},
            data: {balance: {increment: credit}}
        })
    })

    
}
export  const participantRepositories = {
    createParticipant,
    getParticipants,
    getParticipantsBet,
    postCredit
}