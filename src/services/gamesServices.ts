import { gameDto } from "@/utils/types"
import gamesRepositories from "@/repositories/gamesRepositories"

async function postGames(body: gameDto){
    return await gamesRepositories.postGames(body)
}

async function getGames(){
    return await gamesRepositories.getGames()
}

async function getGameByid(id: number){
    return await gamesRepositories.getGameByid(id)
}

const gamesServices = {
    postGames,
    getGames,
    getGameByid
}

export default gamesServices