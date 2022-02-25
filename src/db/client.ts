import { MongoClient } from "mongodb";

if (!process.env.MONGO_DB) {
    throw new Error("Missing MongoDB connection urls.");
}

let mongoClient: MongoClient;
let connection: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    if (!global._devMongoClient) {
        console.log("Establishing MongoDB connection (development)");
        mongoClient = new MongoClient(process.env.MONGO_DB);
        global._devMongoClient = mongoClient.connect();
    }
    connection = global._devMongoClient;
} else {
    console.log("Establishing MongoDB connection (production)");
    mongoClient = new MongoClient(process.env.MONGO_DB);
    connection = mongoClient.connect();
}

/**
 * Promise that resolves to connected MongoDB client.
 */
export const clientPromise = connection;
