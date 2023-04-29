// import clientPromise from "./index";
import { connectToMongo1 } from "./index";

// let client, db, movies;
let movies;

async function init() {
  try {
    movies = await connectToMongo1.collection("movies");
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
    // const result = await movies
    //   .find({})
    //   .limit(20)
    //   .map((user) => ({ ...user, _id: user._id.toString() }))
    //   .toArray();
    const result = await movies
      .aggregate([{ $sample: { size: 30 } }])
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { movies: result };
  } catch (error) {
    return { error: "Failed to fetch movies!" };
  }
}
