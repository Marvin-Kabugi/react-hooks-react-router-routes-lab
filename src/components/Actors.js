import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsJSX = actors.map(actor => {
    const {name, movies} = actor
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
      <h1>Actors Page</h1>
      {actorsJSX}
    </div>
  );
}

export default Actors;
