import { PrismaClient } from "@prisma/client";

export type Context = {
    db: PrismaClient;
};

export const createContext = async (db: PrismaClient): Promise<Context> => {
    return {
        db,
    };
};
