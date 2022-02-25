import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Query {
        examplePost(title: String!): ExamplePost
        exampleAuthor(name: String!): ExampleAuthor
        examplePosts: [ExamplePost!]!
        exampleAuthors: [ExampleAuthor!]!
    }

    type Mutation {
        createExamplePost(data: CreateExamplePostInput!): ID
        createExampleAuthor(data: CreateExampleAuthorInput!): ID
        deleteExamplePost(id: String!): ExamplePost
    }

    type ExamplePost {
        _id: ID!
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
        _id: ID!
        name: String!
        bio: String!
        posts: [ExamplePost!]
    }
    input CreateExampleAuthorInput {
        name: String!
        bio: String!
    }
`;
