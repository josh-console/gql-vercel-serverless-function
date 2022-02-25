import { clientPromise, db } from "~/db";

export const resolvers = {
    Query: {
        async examplePost(title: string) {
            const client = await clientPromise;
            return await client
                .db(db)
                .collection("examplePost")
                .findOne({ title });
        },
        async exampleAuthor(name: string) {
            const client = await clientPromise;
            return await client
                .db(db)
                .collection("exampleAuthor")
                .findOne({ name });
        },
        async examplePosts() {
            const client = await clientPromise;
            return await client
                .db(db)
                .collection("examplePost")
                .find()
                .toArray();
        },
        async exampleAuthors() {
            const client = await clientPromise;
            return await client
                .db(db)
                .collection("exampleAuthor")
                .find()
                .toArray();
        },
    },
    Mutation: {
        async createExamplePost(_: any, { data }: any) {
            const client = await clientPromise;
            const insertion = await client
                .db(db)
                .collection("examplePost")
                .insertOne(data);
            return insertion.insertedId;
        },
        async createExampleAuthor(_: any, { data }: any) {
            const client = await clientPromise;
            const insertion = await client
                .db(db)
                .collection("exampleAuthor")
                .insertOne(data);
            return insertion.insertedId;
        },
        async deleteExamplePost(_: any, id: string) {
            const client = await clientPromise;
            return await client
                .db(db)
                .collection("examplePost")
                .findOneAndDelete({ _id: id });
        },
    },
};
