import { PrismaClient } from '../../../../prisma/generated/client1';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const prisma = new PrismaClient();

export default withApiAuthRequired(async function ProtectedRoute(req, res) {
    const {
        query: { id },
        method,
    } = req;
    const session = getSession(req, res);
    const user = await prisma.user.findUnique({ where: { id: session.user.id } });

    switch (method) {
        case 'POST':
            if (user.role !== 'ADMIN') {
                res.status(403).send('Unauthorized');
                return;
            }
            const response = await prisma.message.create({
                data: {
                    userId: user.id,
                    text: req.body.message,
                },
            });
            await prisma.message.update({
                where: { id: id as string },
                data: {
                    responseId: response.id,
                },
            });
            res.status(200).json({ ...response, author: user });
            break;
    }
});
