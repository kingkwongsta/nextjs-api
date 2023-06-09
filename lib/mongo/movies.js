import clientPromise from "./index";

let client, db, movies;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("sample_mflix");
    movies = await db.collection("movies");
  } catch (error) {
    throw new Error(`No connection with database established - ${error}`);
  }
}

(async () => {
  await init();
})();

export async function getMovies() {
  try {
    if (!movies) await init();
    const result = await movies
      .aggregate([{ $sample: { size: 30 } }])
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { movies: result };
  } catch (error) {
    return { error: "Failed to fetch movies!" };
  }
}
