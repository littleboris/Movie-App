import React, { useContext } from "react";
import "./Movie.css";
import "./AddFavourite";
import AddFavourite from "./AddFavourite";
import { GlobalContext } from "../context/GlobalState";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "gold";
  } else if (vote >= 7) {
    return "green";
  } else if (vote >= 6) {
    return "lightgreen";
  } else if (vote >= 5) {
    return "orange";
  } else if (vote >= 4) {
    return "grape";
  } else {
    return "red";
  }
};

<<<<<<< HEAD
const Movie = ({ title, poster_path, overview, vote_average }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === title.id);

  const watchlistDisabled = storedMovie ? true : false;
  return (
    <div onClick={() => addMovieToWatchlist(title)} className="movie">
=======
const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  handleClickedMovie,
  IMG_API,
}) => {

  return (
    <div
      className="movie"
      onClick={() =>
        handleClickedMovie(title, poster_path, vote_average, overview)
      }
    >
>>>>>>> 28756f20816a542fc5ddf0ddd3415530c8c8205c
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
        <span
          className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>{title}</h2>
        <p>{overview}</p>
        <button>{<AddFavourite />}</button>
      </div>
    </div>
  );
};

export default Movie;
