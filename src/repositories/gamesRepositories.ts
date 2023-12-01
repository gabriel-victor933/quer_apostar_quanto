import { prisma } from "@/config/database";
import { bet, finishGameDto, gameDto } from "@/utils/types";

function postGames(body: gameDto){
    return prisma.game.create({
        data: body
    })
}

function getGames(){
    return prisma.game.findMany()
}

function getGameByid(id: number, includeBets = false ){
    return prisma.game.findFirst({
        where: {id},
        include: {bets: includeBets}
    })
}

async function finishGame(body: finishGameDto,id: number, multiplier: number,bets: bet[]){
    //atualizar placar do jogo
    const updateGame = prisma.game.update({
        where: {id: id},
        data: {
            homeTeamScore: body.homeTeamScore,
            awayTeamScore: body.awayTeamScore,
            isFinished: true
        }
    })
    //atualizar o status das apostas e atualizar o amountWon
    const updatedBets = bets.map((bet) => {
        if(body.awayTeamScore == bet.awayTeamScore && body.homeTeamScore == bet.homeTeamScore){
            //WON
            const amountWon = Math.floor(bet.amountBet*multiplier)
            return prisma.bet.update({
                where: {id: bet.id},
                data: {
                    status: "WON",
                    amountWon: amountWon,
                    participant: {
                        update: {
                            data: {balance: {increment: amountWon}}
                        }
                    }
                }
            })
        }
        //LOST
        return prisma.bet.update({
            where: {id: bet.id},
            data: {
                status: "LOST",
                amountWon: 0
            }
        })
    })
    //atualizar o saldo do jogador

    return prisma.$transaction([updateGame, ...updatedBets])
}


const gamesRepositories = {
    postGames,
    getGames,
    getGameByid,
    finishGame
}

export default gamesRepositories