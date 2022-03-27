import { client } from "./client";

export const dbConnection = (async () => {
    console.log("Connecting Prisma client.");
    await client.$connect();
    return client;
})();
