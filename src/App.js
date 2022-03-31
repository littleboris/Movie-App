import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Featured from "./components/Featured";
import MovieModal from "./components/MovieModal";
import addFavourite from "./components/AddFavourite";
import { GlobalProvider } from "./context/GlobalState";
import Footer from "./components/Footer";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=7dd175e8e4c6252ca5cf5e63ea198b53&language=en-US&sort_by=popularity.desc&";

export default function App() {
  const modalCont = document.getElementById("modal-container");
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState([]);

  function handleClickedMovie(
    title,
    poster_path,
    vote_average,
    overview,
    setVoteClass
  ) {
    setClickedMovie({
      title: title,
      poster_path: poster_path,
      vote_average: vote_average,
      overview: overview,
      setVoteClass: setVoteClass,
    });
    modalCont.style.display = "flex";
  }
  // MovieFavorite part
  //
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

  // Det jag vill ska renderas ut deklarerar jag här till components, och använder mig av props i components
  // Exempelvis, i Search.js säger jag att det kommer finnas en variabel i props som heter "getMovies"
  return (
    <GlobalProvider>
      <main>
        <header>
          <Search getMovies={getMovies} />
        </header>
        <MovieModal movie={clickedMovie} IMG_API={IMG_API} />
        <section>
          <Featured
            movies={movies}
            handleClickedMovie={handleClickedMovie}
            IMG_API={IMG_API}
          />
        </section>
        <footer>
          <div className="page-container">
            <div className="content-wrap"></div>
          </div>
          <Footer />
        </footer>
      </main>
    </GlobalProvider>
  );
}
