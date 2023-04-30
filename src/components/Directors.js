import React from "react";
import { directors } from "../data";

function Directors() {
  const directorJSX = directors.map(director => {
    const {name, movies} = director
    const individualMovie = movies.map(movie => <li key={movie}>{movie}</li>)
    return (
      <div key={name}>
        <h2>Name: {name}</h2>
        <p>Movies: </p>
        <ul>
            {individualMovie}
        </ul>
      </div>
    )
  });

  return (
  <div>
    <h1>Directors Page</h1>
    {directorJSX}
  </div>
  );
}

export default Directors;
