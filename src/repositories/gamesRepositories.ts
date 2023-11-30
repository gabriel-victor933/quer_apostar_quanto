import { prisma } from "@/config/database";
import { gameDto } from "@/utils/types";

function postGames(body: gameDto){
    return prisma.game.create({
        data: body
    })
}

function getGames(){
    return prisma.game.findMany()
}

const gamesRepositories = {
    postGames,
    getGames
}

export default gamesRepositories