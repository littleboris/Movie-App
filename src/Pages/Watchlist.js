import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "../components/Movie";

export default function Watchlist() {
  const watchlist = localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [];
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
              <Movie {...movie} key={movie.title} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your watchlist, add some!</h2>
        )}
      </div>
    </div>
  );
}
