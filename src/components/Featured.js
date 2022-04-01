import React from "react";
import Movie from "./Movie";
import "./styles/Featured.css";

export default function Featured(props) {
  let content;
  // let contentStatus;

  if (props.movies.length > 0) {
    content = props.movies.map((movie) => (
      <Movie
        key={movie.id}
        {...movie}
        handleClickedMovie={props.handleClickedMovie}
        IMG_API={props.IMG_API}
      />
    ));
  } else {
    content = "Can't find that movie, please search again.";
  }

  return (
    <section className="featured-section">
      <div className="movie-container">{content}</div>
    </section>
  );
}

//  {
//         props.movies.length > 0 &&
//           props.movies.map((movie) => <Movie key={movie.id} {...movie} />)
//         }
