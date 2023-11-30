import { gameDto } from "@/utils/types"
import gamesRepositories from "@/repositories/gamesRepositories"

async function postGames(body: gameDto){
    return await gamesRepositories.postGames(body)
}

async function getGames(){
    return await gamesRepositories.getGames()
}

const gamesServices = {
    postGames,
    getGames
}

export default gamesServices