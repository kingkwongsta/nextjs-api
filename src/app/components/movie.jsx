"use client";
import { useState, useEffect } from "react";
import MovieCard from "./moviecard";

export default function Movie() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const response = await fetch("/api/movies");
    console.log(response);
    const data = await response.json();
    setMovieData(data);
  };

  //check what is in State
  function whatData() {
    console.log(movieData);
  }

  function renderMovieCards() {
    //remove movies with no poster available
    const cleandata = movieData.filter((x) => x.poster !== undefined);
    console.log(cleandata);
    return cleandata.map((movie, index) => {
      return (
        <MovieCard key={index} title={movie.title} poster={movie.poster} />
      );
    });
  }

  return (
    <div className="max-w-[1200px]">
      {/* debug to check data */}
      <button className="m-5 border-2 p-2" onClick={whatData}>
        what is in movie component state
      </button>
      <div className="grid grid-flow-row-dense grid-cols-5 gap-5">
        {movieData ? renderMovieCards() : <h3>meow</h3>}
      </div>
    </div>
  );
}
