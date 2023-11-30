import { prisma } from "@/config/database";
import { gameDto } from "@/utils/types";

function postGames(body: gameDto){
    return prisma.game.create({
        data: body
    })
}

const gamesRepositories = {
    postGames
}

export default gamesRepositories