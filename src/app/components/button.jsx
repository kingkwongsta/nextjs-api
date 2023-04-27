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

  function whatData() {
    console.log(movieData);
  }

  function renderMovieCards() {
    return movieData.map((movie) => {
      return (
        <MovieCard key={movie._id} title={movie.title} poster={movie.poster} />
      );
    });
  }

  function renderTest() {
    return <Test />;
  }

  return (
    <div className="max-w-[1200px]">
      <h2>Yo Yo</h2>
      <button onClick={whatData}>what is in state</button>
      {movieData ? renderMovieCards() : <h3>meow</h3>}
    </div>
  );
}
