"use client";
import { useState, useEffect } from "react";
import MovieCard from "./moviecard";
import Test from "./test";

export default function Button() {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const response = await fetch("/api/movies");
    const data = await response.json();
    setMovieData(data);
  };

  //check what is in State
  function whatData() {
    console.log(movieData);
  }

  function renderMovieCards() {
    const cleandata = movieData.filter((x) => x.poster !== undefined);
    console.log(cleandata);
    return cleandata.map((movie) => {
      return (
        <MovieCard key={movie._id} title={movie.title} poster={movie.poster} />
      );
    });
  }

  return (
    <div className="max-w-[1200px]">
      <button className="m-5 border-2 p-2" onClick={whatData}>
        what is in state
      </button>
      <div className="flex flex-wrap gap-5 justify-between">
        {movieData ? renderMovieCards() : <h3>meow</h3>}
      </div>
    </div>
  );
}
