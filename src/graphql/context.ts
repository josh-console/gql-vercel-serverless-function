import { Db } from "mongodb";

export type Context = {
    db: Db;
};

export const createContext = async (db: Db): Promise<Context> => {
    return {
        db,
    };
};
