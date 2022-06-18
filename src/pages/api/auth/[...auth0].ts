import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';
import * as Sentry from '@sentry/nextjs';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
    dsn: SENTRY_DSN || 'https://2fd0a782eaed4eb482dfce01cbd91d56@o1291838.ingest.sentry.io/6513195',
    tracesSampleRate: 1.0,
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

export default Sentry.withSentry(
    handleAuth({
        async callback(req, res) {
            try {
                await handleCallback(req, res, { afterCallback });
            } catch (error) {
                res.status(error.status || 500).end(error.message);
            }
        },
    })
);
