import clientPromise from "./index";

let client, db, restaurants;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("sample_restaurants");
    restaurants = await db.collection("restaurants");
  } catch (error) {
    throw new Error(`No connection with database established - ${error}`);
  }
}

(async () => {
  await init();
})();

export async function getRestaurants() {
  try {
    if (!restaurants) await init();
    const result = await restaurants
      .aggregate([{ $sample: { size: 30 } }])
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { restaurants: result };
  } catch (error) {
    return { error: "Failed to fetch restaurants!" };
  }
}
