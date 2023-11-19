import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    return await prisma.likes.delete({
        where: {id: Number(id)}
    })
})