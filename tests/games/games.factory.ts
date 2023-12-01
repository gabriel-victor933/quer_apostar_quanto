import {faker} from "@faker-js/faker"
import { prisma } from "../../src/config/database"

export function createGameData(){
    return {
        homeTeamName: faker.word.noun(),
        awayTeamName: faker.word.noun()
    }
}

export async function insertGameInDb(){
    return await prisma.game.create({data: createGameData()})
}