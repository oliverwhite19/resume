import { Education, Prisma2 } from '../../prisma/generated/client2';
import { Education, Prisma1 } from '../../prisma/generated/client1';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.ico';

export type Currency = {
    name: string;
    value: string;
    countryCode: string;
    symbolLeft?: string;
    symbolRight?: string;
};

type EmploymentWithPositions = Prisma2.EmploymentGetPayload<{
    include: { positions: true };
}>;

type EducationWithTitle = {
    title: string;
    list: Array<Education>;
};

type MessageWithRelations = Prisma1.MessageGetPayload<{
    include: { response: true; author: true };
}>;
