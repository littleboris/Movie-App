import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCardWatchlist = ({ movie, type }) => {
  return (
    <div classname="movie-card">
      <div classname="overlay"></div>
      <div
        className="movie"
        onClick={() =>
          handleClickedMovie(title, poster_path, vote_average, overview)
        }
      >
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
          }
          alt={title}
        />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        </div>
        <div className="movie-over">
          <h2>{title}</h2>
          <p>{overview}</p>
          <button>{<AddFavourite />}</button>
          <MovieControls type={type} movie={movie} />
        </div>
      </div>
    </div>
  );
};
