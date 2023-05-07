import clientPromise from "./index";

let client, db, transactions;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("web3");
    transactions = await db.collection("arbitrum");
  } catch (error) {
    throw new Error(`No connection with database established - ${error}`);
  }
}

(async () => {
  await init();
})();

export async function getData() {
  try {
    if (!transactions) await init();
    const result = await transactions.find({}).toArray();
    return { transactions: result };
  } catch (error) {
    return { error: "Failed to fetch transactions!" };
  }
}
