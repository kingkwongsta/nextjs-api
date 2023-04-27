// "use client";
import { GET } from "./../api/movies/route";
// import { getMovies } from "./../../../lib/mongo/movies";
import MovieCard from "./moviecard";

// export async function getStaticProps() {
//   const message = await GET("message");
//   console.log(message);
//   return message;
// }

// async function fetchMovies() {
//   const { movies } = await getMovies();
//   return movies;
// }

async function fetchMovies() {
  const { movies } = await GET();
  return movies;
}

export default async function Button({ message }) {
  //   const getData = async () => {
  //     const res = await getMovies();
  //     setMovieData(res);
  //     console.log(res);
  //   };
  const movies = await fetchMovies();

  function renderMovieCards() {
    return movies.map((movie) => {
      <MovieCard key={movie._id} title={movie.title} poster={movie.poster} />;
    });
  }

  return (
    <div className="max-w-[1200px]">
      <h2>Yo Yo</h2>
      <div>{movies}</div>
      {/* {movieData ? renderMovieCards() : <></>} */}
    </div>
  );
}
