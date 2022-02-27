import { PrismaClient } from "@prisma/client";

declare global {
    /**
     * Global Prisma client for development mode to avoid excess HMR connections.
     */
    var _devPrismaClient: PrismaClient | undefined;
}
