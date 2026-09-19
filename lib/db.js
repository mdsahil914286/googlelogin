import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;


const client = new MongoClient(uri);

const db = client.db()

export {db, client};









// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;

// if (!uri) {
//   throw new Error("MONGODB_URI is missing in .env.local");
// }

// if (uri.includes("<") || uri.includes(">")) {
//   throw new Error(
//     "MONGODB_URI still contains placeholders. Copy the real MongoDB Atlas connection string into .env.local.",
//   );
// }

// const globalForMongo = globalThis;

// const client = globalForMongo.mongoClient ?? new MongoClient(uri);
// globalForMongo.mongoClient = client;

// const db = client.db(process.env.MONGODB_DB_NAME || "googlelogin");

// export { client, db };