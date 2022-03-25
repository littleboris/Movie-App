import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Featured from "./components/Featured";
import MovieModal from "./components/MovieModal";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=7dd175e8e4c6252ca5cf5e63ea198b53&language=en-US&sort_by=popularity.desc&";

export default function App() {
  const movieModal = document.getElementById("movie-modal");
  const movieInfo = document.getElementById("movie-info-container");
  const modalCont = document.getElementById("modal-container");
  const allMovies = document.getElementsByClassName("movie");

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    for (let i = 0; i < allMovies.length; i++) {
      allMovies[i].addEventListener("click", () => {
        movieInfo.innerHTML = `<div id="movie-info"> <h2>${movies[i].title}</h2>
          <p>${movies[i].overview}</p>
          <div id="rating-box"<h3>Rating: ${movies[i].vote_average}</h3></div></div>`;
        movieModal.style.background = `url(${
          IMG_API + movies[i].poster_path
        }) center / 100% no-repeat fixed`;
        modalCont.style.display = "flex";
      });
    }
  });

  // Det jag vill ska renderas ut deklarerar jag här till components, och använder mig av props i components
  // Exempelvis, i Search.js säger jag att det kommer finnas en variabel i props som heter "getMovies"
  return (
    <div>
      <header>
        <Search getMovies={getMovies} />
      </header>
      <MovieModal movies={movies} />
      <section>
        <Featured movies={movies} />
      </section>
    </div>
  );
}
