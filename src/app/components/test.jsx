"use client";
// import { GET } from "./../api/movies/route";
import { useState } from "react";

// async function fetchMovies() {
//     const { movies } = await GET();
//     return movies;
//   }

export default function Button() {
  const [data, setData] = useState();

  const fetchMovie = async () => {
    const response = await fetch("/api/hello");
    setData(response);
  };

  function whatData() {
    console.log(data.body);
  }

  return (
    <div className="max-w-[1200px]">
      <h2>Yo Yo Yo</h2>
      <button onClick={fetchMovie}>{data ? "got data" : "hello"}</button>
      <br />
      <button onClick={whatData}>what is in state</button>
    </div>
  );
}
