import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

const afterCallback = async (req, res, session) => {
    try {
        let currentUser = await prisma.user.findUnique({ where: { email: session?.user.email } });
        if (!currentUser) {
            currentUser = await prisma.user.create({
                data: {
                    email: session?.user.email,
                    givenName: session?.user.given_name,
                    familyName: session?.user.family_name,
                    name: session?.user.name,
                    nickname: session?.user.nickname,
                    updatedAt: new Date(),
                },
            });
        }
        session.user.id = currentUser.id;
        return session;
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
};

export default handleAuth({
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    },
});
