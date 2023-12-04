import {faker} from "@faker-js/faker"
import { prisma } from "../../src/config/database"

export function createGameData(){
    return {
        homeTeamName: faker.word.noun(),
        awayTeamName: faker.word.noun()
    }
}

export function createGameResults(homeTeamScore?:number, awayTeamScore?: number){

    

    return {
        homeTeamScore: homeTeamScore || homeTeamScore== 0 ? homeTeamScore : faker.number.int({min: 0, max: 6}),
        awayTeamScore: awayTeamScore || awayTeamScore== 0 ? awayTeamScore : faker.number.int({min: 0, max: 6})
    }
}

export async function insertGameInDb(isFinished = false){
    return await prisma.game.create({data: {...createGameData(), isFinished}})
}