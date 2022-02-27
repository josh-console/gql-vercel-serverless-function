import { clientPromise } from "./client";

const DB = "vercel-serverless-function";

export const dbConnection = async () => {
    const client = await clientPromise;
    return client.db(DB);
};
