import { PrismaClient } from '../../../prisma/generated/client2';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const employments = await prisma.employment.findMany({ include: { positions: true } });
    res.status(200).json(employments);
}
