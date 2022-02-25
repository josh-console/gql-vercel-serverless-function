import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Query {
        examplePost(id: String!): ExamplePost
        exampleAuthor(id: String!): ExampleAuthor
        examplePosts: [ExamplePost!]!
        exampleAuthors: [ExampleAuthor!]!
    }

    type Mutation {
        createExamplePost(data: CreateExamplePostInput!): ExamplePost
        createExampleAuthor(data: CreateExampleAuthorInput!): ExampleAuthor
        deleteExamplePost(id: String!): ExamplePost
    }

    type ExamplePost {
        id: ID!
        title: String!
        body: String!
        avatar: String
        authorId: String
        author: ExampleAuthor
    }
    input CreateExamplePostInput {
        title: String!
        body: String!
        avatar: String
        authorId: String
    }

    type ExampleAuthor {
        id: ID!
        name: String!
        bio: String!
        posts: [ExamplePost!]
    }
    input CreateExampleAuthorInput {
        name: String!
        bio: String!
    }
`;
