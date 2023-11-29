import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

export async function connectDb(){
    console.log("connecting db...")
    await prisma.$connect()
}

