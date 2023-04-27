"use client";
// import { GET } from "./../api/movies/route";
import { useState } from "react";

// async function fetchMovies() {
//     const { movies } = await GET();
//     return movies;
//   }

export default function Test() {
  const [data, setData] = useState();

  const fetchMovie = async () => {
    const response = await fetch("/api/movies");
    const convert = await response.json();
    console.log(convert);
    setData(response);
  };

  function whatData() {
    console.log(data);
  }

  return (
    <div className="max-w-[1200px] m-10">
      <h2>Nice Nice Nice</h2>
      <button onClick={fetchMovie}>{data ? "got data" : "hello"}</button>
      <br />
      <button onClick={whatData}>what is in state</button>
    </div>
  );
}
