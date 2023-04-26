// "use client";
// import { GET } from "./../api/movies/route";
import { getMovies } from "./../../../lib/mongo/movies";

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
  return (
    <div>
      <button className="border-2 p-2">HELLO</button>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie._id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
