import {prisma} from '../../src/config/database';

export async function resetDb(){
    await prisma.participant.deleteMany();
    await prisma.game.deleteMany();
    await prisma.bet.deleteMany();
}