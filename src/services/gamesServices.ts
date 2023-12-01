import { finishGameDto, gameDto, bet } from "../utils/types"
import gamesRepositories from "../repositories/gamesRepositories"
import { badRequestException, notFoundException } from "../errors/commonErrors"

const HOUSE_TAX = 0.3

async function postGames(body: gameDto){
    return await gamesRepositories.postGames(body)
}

async function getGames(){
    const games = await gamesRepositories.getGames()
    return games
}


async function getGameByid(id: number){
    const game = await gamesRepositories.getGameByid(id)
    if(!game) throw notFoundException("Game Not Found!");
    return game
}

async function finishGame(body: finishGameDto,id: number){
    const game = await gamesRepositories.getGameByid(id,true);
    if(!game) throw notFoundException("Game Not Found!");
    if(game.isFinished) throw badRequestException("Game have already finished!")
    const multiplier = sumBetsAmounts(body,game.bets)

    const updatedGame = await gamesRepositories.finishGame(body,id,multiplier,game.bets)

    return updatedGame[0]
}

function sumBetsAmounts(body: finishGameDto, bets: bet[]){
    if(bets.length == 0) return 0

    let totalbet = 0
    let totalWonBet = 0
    
    bets.forEach((bet)=>{
        totalbet += bet.amountBet;
        if(body.awayTeamScore == bet.awayTeamScore && body.homeTeamScore == bet.homeTeamScore){
            totalWonBet += bet.amountBet
        }

    })
    return (totalbet/totalWonBet)*(1 - HOUSE_TAX);
}

const gamesServices = {
    postGames,
    getGames,
    getGameByid,
    finishGame
}

export default gamesServices