import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = readBody(event)

    const res = await prisma.likes.create({
        data: {
            userId: body.userId,
            postId: body.postId
        }
    })
    return res
})