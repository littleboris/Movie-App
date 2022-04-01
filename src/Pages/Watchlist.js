import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "../components/Movie";
import "../Pages/Watchlist.css";

export default function Watchlist() {
  const { watchlist, removeMovieFromWatchlist } = useContext(GlobalContext);

  console.log(watchlist);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <div key={movie.title} className="remove-btn-container">
                <i
                  className="remove-btn"
                  onClick={() => removeMovieFromWatchlist(movie)}
                >
                  X
                </i>
                <Movie {...movie} />
              </div>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your watchlist, add some!</h2>
        )}
      </div>
    </div>
  );
}
