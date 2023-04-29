// import { MongoClient } from "mongodb";

// const URI = process.env.MONGODB_URI;
// const options = {};

// if (!URI) throw new Error("Add Mongo URI to .env.local");

// let client = new MongoClient(URI, options);
// let clientPromise;

// if (process.env.NODE_ENV != "production") {
//   if (!global._mongoClientPrmoise) {
//     global._mongoClientPrmoise = client.connect();
//   }
//   clientPromise = global._mongoClientPrmoise;
// } else {
//   clientPromise = client.connect();
// }

// export default clientPromise;

const { MongoClientPromise } = require("mongodb");

const url = process.env.URI;

async function connectToMongo1() {
  const client = await MongoClientPromise.connect(url);
  const db = client.db("sample_mflix");
  return db;
}

async function connectToMongo2() {
  const client = await MongoClientPromise.connect(url);
  const db = client.db("sample_restaurants");
  return db;
}

module.exports = {
  connectToMongo1,
  connectToMongo2,
};
