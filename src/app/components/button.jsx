// "use client";
// import { GET } from "./../api/movies/route";
import { render } from "react-dom";
import { getMovies } from "./../../../lib/mongo/movies";
import MovieCard from "./moviecard";

// export async function getStaticProps() {
//   const message = await GET("message");
//   console.log(message);
//   return message;
// }

async function fetchMovies() {
  const { movies } = await getMovies();
  return movies;
}

export default async function Button({ message }) {
  //   function handleClick() {
  //     console.log("hi");
  //   }

  const movies = await fetchMovies();
  function renderMovieCards() {
    return movies.map((movie) => {
      <MovieCard key={movie._id} title={movie.title} poster={movie.poster} />;
    });
  }

  return <div className="max-w-[1200px]">{renderMovieCards()}</div>;
}
