//TODO
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./schema');

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs: typeDefs.typeDefs,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`Server is running at ${url}`);
}

startApolloServer();