import { Resolvers } from "../generated/types";

export const resolvers: Resolvers = {
    Query: {
        async game(_, { id }, { db }) {
            const game = await db.collection("game").findOne({ id });
            if (!game) {
                return null;
            }
            return { __typename: "Game", id: game._id.toString(), players: [] };
        },
        async player(_, { id }, { db }) {
            const player = await db.collection("player").findOne({ id });
            if (!player) {
                return null;
            }
            return {
                __typename: "Player",
                id: player._id.toString(),
                username: "",
            };
        },
    },
    Mutation: {},
};
