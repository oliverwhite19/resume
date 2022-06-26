import { PrismaClient } from '../../../prisma/generated/client1';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const prisma = new PrismaClient();

export default withApiAuthRequired(async function ProtectedRoute(req, res) {
    const { method } = req;
    const session = getSession(req, res);

    switch (method) {
        case 'POST':
            await prisma.message.create({
                data: {
                    userId: session.user.id,
                    text: req.body.message,
                },
            });
        case 'GET':
            const messages = await prisma.message.findMany({
                where: { userId: session.user.id, responseeId: null },
                include: {
                    author: true,
                    response: true,
                },
            });
            res.status(200).json(messages);
            break;
    }
});
