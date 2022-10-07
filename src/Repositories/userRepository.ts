import { prisma } from "../Config/database"
import { users } from "@prisma/client";

export async function insertUser(user: Omit<users,'id'>) {
    await prisma.users.create({
        data: user
    });
}

export async function findUser(email: string) {
    const data = await prisma.users.findUnique({
        where: {email}
    })
    return data;
}