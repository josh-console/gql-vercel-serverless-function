import { Resolvers } from "../generated/types";

export const resolvers: Resolvers = {
    Query: {
        async game(_, { id }, { db }) {
            const game = await db.game.findFirst({
                where: {
                    id,
                },
            });
            return (
                game && {
                    ...game,
                    players: [],
                }
            );
        },
        async player(_, { id }, { db }) {
            const player = await db.account.findFirst({
                where: { id },
            });
            return player;
        },
    },
    Mutation: {
        async signUp(_, { input }, { db }) {
            const account = await db.account.create({
                data: {
                    username: input.username,
                },
            });
            return account;
        },
    },
};
