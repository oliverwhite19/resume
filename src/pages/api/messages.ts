import { PrismaClient } from '../../../prisma/generated/client1';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const prisma = new PrismaClient();

export default withApiAuthRequired(async function ProtectedRoute(req, res) {
    const { method } = req;
    const session = getSession(req, res);
    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    console.log(session);

    switch (method) {
        case 'POST':
            await prisma.message.create({
                data: {
                    userId: user.id,
                    text: req.body.message,
                },
            });
        case 'GET':
            const messages = await prisma.message.findMany({
                where: {
                    userId: user.role === 'ADMIN' ? undefined : user.id,
                },
                include: {
                    author: true,
                    response: {
                        include: {
                            author: true,
                        },
                    },
                    responsee: true,
                },
            });
            res.status(200).json(messages.filter((response) => !response.responsee));
            break;
    }
});
