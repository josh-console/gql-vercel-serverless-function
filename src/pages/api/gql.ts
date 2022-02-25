import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPlugin } from "apollo-server-plugin-base";
import { RequestHandler } from "micro";
import Cors from "micro-cors";
import { NextApiHandler } from "next";
import { resolvers } from "~/resolvers";
import { typeDefs } from "~/typeDefs";

const loggerPlugin: ApolloServerPlugin = {
    async requestDidStart(ctx) {
        return {
            async didResolveOperation(ctx) {
                console.log(
                    `${ctx.operation.operation}(${
                        ctx.operation.name?.value || "Anonymous"
                    })`,
                );
            },
        };
    },
    async serverWillStart() {
        console.log("Bootstrapping Apollo server.");
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [loggerPlugin],
});

const apollo = apolloServer.start();

const handler: NextApiHandler = async (req, res) => {
    if (req.method === "OPTIONS") {
        res.end();
        return;
    }

    await apollo;
    await apolloServer.createHandler({ path: "/api/gql" })(req, res);
};
export default Cors()(handler as RequestHandler);

export const config = {
    api: {
        bodyParser: false,
    },
};
