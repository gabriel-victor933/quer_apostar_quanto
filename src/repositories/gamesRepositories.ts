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

function getGameByid(id: number){
    return prisma.game.findFirst({
        where: {id}
    })
}

const gamesRepositories = {
    postGames,
    getGames,
    getGameByid
}

export default gamesRepositories