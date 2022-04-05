import React, { useContext } from "react";
import "./styles/Movie.css";
import "./Favourites/AddFavourite";
import AddFavourite from "./Favourites/AddFavourite";
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

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  handleClickedMovie,
  IMG_API,
}) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === title.id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <main>
      <div className="movie">
        <span id="favourite-btn">
          <button
            onClick={() => {
              addMovieToWatchlist({
                title,
                poster_path,
                overview,
                vote_average,
                IMG_API,
              });
            }}
          >
            {<AddFavourite />}
          </button>
        </span>
        <img
          onClick={() =>
            handleClickedMovie(title, poster_path, vote_average, overview)
          }
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
        </div>
      </div>
    </main>
  );
};

export default Movie;

/* <p id="addInfo">Add this movie to your watchlist!</p> */

// #addInfo {
//   background-color: rgba(68, 68, 68, 0.804);
//   font-size: 0.5rem;
//   width: 4rem;
//   margin-right: 0.8rem;
//   margin-top: 4.6rem;
//   text-align: center;
//   position: inherit;
//   display: none;
// }
