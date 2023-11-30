import { gameDto } from "@/utils/types"
import gamesRepositories from "@/repositories/gamesRepositories"
import { notFoundException } from "@/errors/commonErrors"

async function postGames(body: gameDto){
    return await gamesRepositories.postGames(body)
}

async function getGames(){
    const games = await gamesRepositories.getGames()
    if(games.length == 0) throw notFoundException("Games Not Found!");
    return games
}


async function getGameByid(id: number){
    const game = await gamesRepositories.getGameByid(id)
    if(!game) throw notFoundException("Game Not Found!");
    return game
}


const gamesServices = {
    postGames,
    getGames,
    getGameByid
}

export default gamesServices