import {faker} from "@faker-js/faker"

export function createGameData(){
    return {
        homeTeamName: faker.word.noun(),
        awayTeamName: faker.word.noun()
    }
}