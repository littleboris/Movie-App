import React from "react";
import Movie from "./Movie";
import "./styles/MovieList.css";

export default function MovieList(props) {
  let content;
  let cantFind;
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
    cantFind = "Can't find that movie, please search again.";
  }

  return (
    <section className="featured-section">
      <p id="cant-find">{cantFind}</p>
      <div className="movie-container">{content}</div>
    </section>
  );
}

//  {
//         props.movies.length > 0 &&
//           props.movies.map((movie) => <Movie key={movie.id} {...movie} />)
//         }
