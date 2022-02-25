import { MongoClient } from "mongodb";

declare global {
    /**
     * Global MongoDB client for development mode to avoid excess HMR connections.
     */
    var _devMongoClient: Promise<MongoClient> | undefined;
}
