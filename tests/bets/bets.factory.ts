import { faker } from "@faker-js/faker"

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