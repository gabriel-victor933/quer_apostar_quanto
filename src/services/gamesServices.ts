import { gameDto } from "@/utils/types"
import gamesRepositories from "@/repositories/gamesRepositories"

async function postGames(body: gameDto){
    return await gamesRepositories.postGames(body)
}

const gamesServices = {
    postGames,
}

export default gamesServices