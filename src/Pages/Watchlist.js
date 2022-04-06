import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "../components/Movie";
import "../Pages/Watchlist.css";
import "../components/styles/Movie.css";
import Footer from "../components/Footer";
//import NavBar from "../components/Navbar/Navbar";

export default function Watchlist() {
  const { watchlist, removeMovieFromWatchlist } = useContext(GlobalContext);

  return (
    <article className="movie-page">
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
          <h4 className="no-movies">No movies in your watchlist, add some!</h4>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}
