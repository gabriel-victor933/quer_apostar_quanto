import { faker } from '@faker-js/faker';
import {prisma} from '../../src/config/database';

export async function resetDb(){
    await prisma.participant.deleteMany();
    await prisma.game.deleteMany();
    await prisma.bet.deleteMany();
}

export function createParticipantData(isBalanceValid = true){
    if(isBalanceValid){
        return {
            name: faker.person.firstName(),
            balance: faker.number.int({min: 1000, max: 10000})
        }
    }
    return {
        name: faker.person.firstName(),
        balance: faker.number.int({min: 1, max: 999})
    }
}