import { PrismaClient } from '../../../prisma/generated/client2';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const educations = await prisma.education.findMany();
    res.status(200).json({ title: 'Eductation', list: educations });
}
