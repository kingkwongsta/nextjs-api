import clientPromise from "./index";

let client, db, nfts;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("nft");
    nfts = await db.collection("test2");
  } catch (error) {
    throw new Error(`No connection with database established - ${error}`);
  }
}

(async () => {
  await init();
})();

export async function getData() {
  try {
    if (!nfts) await init();
    const result = await nfts.find({}).toArray();
    return { nfts: result };
  } catch (error) {
    return { error: "Failed to fetch nfts!" };
  }
}
