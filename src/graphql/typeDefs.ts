import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Query {
        game(id: String!): Game
        player(id: String!): Player
    }

    type Mutation {
        createGame: Game
        invitePlayerToGame(playerId: String!, gameId: String!): Player
        signUp(input: SignUpInput!): Player!
    }

    input SignUpInput {
        firstName: String!
        lastName: String!
        username: String!
    }

    type Game {
        id: String!
        players: [Player]!
    }

    type Player {
        id: String!
        username: String!
    }
`;
