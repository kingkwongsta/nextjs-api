// "use client";
// import { GET } from "./../api/movies/route";
import { getMovies } from "./../../../lib/mongo/movies";
import Image from "next/image";

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
        {movies.map((movie) => (
          <div key={movie._id}>
            <div>{movie.title}</div>
            <Image src={movie.poster} width={350} height={500} alt="poster" />
          </div>
        ))}
      </div>
    </div>
  );
}
