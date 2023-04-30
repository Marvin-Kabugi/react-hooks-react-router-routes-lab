import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesJSX = movies.map(movie => {
    const {title, time, genres} = movie
    const individualGenres = genres.map(genre => <li key={genre}>{genre}</li>)
    return (
      <div key={title}>
        <h2>Name: {title}</h2>
        <p>Time: {time}</p>
        <ul>
            {individualGenres}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Movies Page</h1>
    {moviesJSX}
  </div>);
}

export default Movies;
