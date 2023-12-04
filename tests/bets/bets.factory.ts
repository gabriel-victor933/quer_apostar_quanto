import { faker } from "@faker-js/faker"
import { prisma } from "../../src/config/database"

export function createBetData(gameId: number, participantId: number, balanceOfParticipant: number, haveEnoughFunds: boolean = true){
    
    const amountBet = haveEnoughFunds ? faker.number.int({min: 10, max: balanceOfParticipant}) : faker.number.int({min: balanceOfParticipant + 1, max: balanceOfParticipant + 1000})

    return {
        gameId,
        participantId,
        homeTeamScore: faker.number.int({min: 0, max: 6}),
        awayTeamScore: faker.number.int({min: 0, max: 6}), 
        amountBet
    
    }
}

export async function insertBetInDb(gameId: number, participantId: number, balanceOfParticipant: number, haveEnoughFunds: boolean = true){
    return await prisma.bet.create({
        data: createBetData(gameId,participantId,balanceOfParticipant,haveEnoughFunds)
    })
}

export async function getBetById(id: number){
    return await prisma.bet.findFirst({
        where: {id}
    })
}