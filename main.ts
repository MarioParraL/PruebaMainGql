import { MongoClient } from "mongodb";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
  throw new Error("Please provide a MONGO_URL");
}


const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();
console.info("Connected to MongoDB");

const mongoDB = mongoClient.db("MainDB");
const HolaCollection = mongoDB.collection("hola");

/*
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({ HolaCollection }),
});

console.info(`Server ready at ${url}`);

*/
