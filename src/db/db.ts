import { client } from "./client";

export const dbConnection = (async () => {
    await client.$connect();
    return client;
})();
