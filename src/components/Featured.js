import React from "react";
import Movie from "./Movie";
import "./Featured.css";

export default function Featured(props) {
  return (
    <div className="movie-container">
      {props.movies.length > 0 &&
        props.movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}
