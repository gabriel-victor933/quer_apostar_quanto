import {prisma} from '../../src/config/database';

export async function resetDb(){
    await prisma.bet.deleteMany();
    await prisma.participant.deleteMany();
    await prisma.game.deleteMany();
    
}