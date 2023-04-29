import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI1;
const options = {};

if (!URI) throw new Error("Add Mongo URI to .env.local");

let client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV != "production") {
  if (!global._mongoClientPrmoise) {
    global._mongoClientPrmoise = client.connect();
  }
  clientPromise = global._mongoClientPrmoise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;

// import { MongoClient } from "mongodb";

// const URI1 = process.env.MONGODB_URI1;
// const URI2 = process.env.MONGODB_URI2;
// const options = {};

// if (!URI1 || !URI2) throw new Error("Add Mongo URIs to .env.local");

// class DatabaseConnector {
//   constructor() {
//     this.clients = {};
//     this.clientPromises = {};
//   }

//   async getClient(dbName, URI) {
//     if (!this.clients[dbName]) {
//       this.clients[dbName] = new MongoClient(URI, options);
//       this.clientPromises[dbName] = this.clients[dbName].connect();
//     }
//     return this.clientPromises[dbName];
//   }
// }

// const connector = new DatabaseConnector();

// export const getDb1Client = async () => {
//   const clientPromise = await connector.getClient("db1", URI1);
//   return clientPromise;
// };

// export const getDb2Client = async () => {
//   const clientPromise = await connector.getClient("db2", URI2);
//   return clientPromise;
// };
