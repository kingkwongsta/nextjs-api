import clientPromise from "./index";

let client, db, nfts;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("web3");
    nfts = await db.collection("nft_top_eth");
    console.log("connected to database");
  } catch (error) {
    throw new Error(`No connection with database established - ${error}`);
  }
}

(async () => {
  await init();
  console.log("init ran");
})();

export async function getData() {
  try {
    if (!nfts) await init();
    const result = await nfts.find({}).toArray();
    return { nfts: result };
  } catch (error) {
    return { error: "Failed to fetch transactions!" };
  }
}