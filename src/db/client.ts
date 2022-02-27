import { PrismaClient } from "@prisma/client";

if (!process.env.MONGO_DB) {
    throw new Error("Missing MongoDB connection urls.");
}

let prismaClient: PrismaClient;

if (process.env.NODE_ENV === "development") {
    if (!global._devPrismaClient) {
        console.log("Establishing DEVELOPMENT Prisma client.");

        global._devPrismaClient = new PrismaClient();
    }
    prismaClient = global._devPrismaClient;
} else {
    console.log("Establishing PRODUCTION Prisma client.");
    prismaClient = new PrismaClient();
}

/**
 * Promise that resolves to connected MongoDB client.
 */
export const client = prismaClient;
