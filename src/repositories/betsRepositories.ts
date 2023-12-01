import { prisma } from "../config/database";
import { badRequestException, insufficientFundsExceptions, notFoundException } from "../errors/commonErrors";
import { betsDto } from "../utils/types";

function postBet(body: betsDto){
    return prisma.$transaction(async (tx) => {
        const participant = await tx.participant.findFirst({where: {id: body.participantId}})
        if(!participant) throw notFoundException("Participant Not Found!")

        const game = await tx.game.findFirst({where: {id: body.gameId}})
        if(!game) throw notFoundException("Game Not Found!")

        if(participant.balance < body.amountBet) throw insufficientFundsExceptions("Operation will not be complete because of insufficient funds!")

        if(game.isFinished) throw badRequestException("Game have already finished!")
        
        await tx.participant.update({
            where: {id: body.participantId},
            data: {balance: participant.balance - body.amountBet}
        })
        return await tx.bet.create({
            data: {
                homeTeamScore: typeof(body.homeTeamScore) == "number"? body.homeTeamScore : parseInt(body.homeTeamScore),
                awayTeamScore: typeof(body.awayTeamScore) == "number"? body.awayTeamScore : parseInt(body.awayTeamScore),
                amountBet: typeof(body.amountBet) == "number"? body.amountBet : parseInt(body.amountBet),
                gameId: typeof(body.gameId) == "number"? body.gameId : parseInt(body.gameId),
                participantId: typeof(body.participantId) == "number"? body.participantId : parseInt(body.participantId),
            }
        })
    })
}

const betsRepositories = {
    postBet
}

export default betsRepositories