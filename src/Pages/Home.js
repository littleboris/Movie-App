import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieModal from "../components/MovieModal";
import "../index.css";
import Search from "../components/Navbar/Search";
import Footer from "../components/Footer";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=7dd175e8e4c6252ca5cf5e63ea198b53&language=en-US&sort_by=popularity.desc&";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState([]);

  function handleClickedMovie(
    title,
    poster_path,
    vote_average,
    overview,
    setVoteClass
  ) {
    const modalCont = document.getElementById("modal-container");
    setClickedMovie({
      title: title,
      poster_path: poster_path,
      vote_average: vote_average,
      overview: overview,
      setVoteClass: setVoteClass,
    });
    modalCont.style.display = "flex";
  }

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  return (
    <main>
      <Search getMovies={getMovies} />
      <MovieModal movie={clickedMovie} IMG_API={IMG_API} />
      <section>
        <MovieList
          movies={movies}
          handleClickedMovie={handleClickedMovie}
          IMG_API={IMG_API}
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
