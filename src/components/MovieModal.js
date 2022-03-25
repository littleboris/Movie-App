import React from "react";
import "./MovieModal.css";

// const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function MovieModal(props) {
  // const movieModal = document.getElementById("movie-modal");
  // const movieInfo = document.getElementById("movie-info");
  const modalCont = document.getElementById("modal-container");
  // const allMovies = document.getElementsByClassName("movie");

  // console.log(props.movies);

  const handleReturn = () => {
    modalCont.style.display = "none";
  };

  // const displayModal = () => {
  //   for (let i = 0; i < allMovies.length; i++) {
  //     movieInfo.innerHTML = `<h2>${props.movies[i].title}</h2>
  //        <p>${props.movies[i].overview}</p>
  //         <h3>Rating: ${props.movies[i].vote_average}</h3>`;
  //     movieModal.style.background = `url(${
  //       IMG_API + props.movies[i].poster_path
  //     }) center / 100vh`;
  //     document.getElementById("modal-container").style.display = "flex";
  //   }
  // };

  return (
    <div className="modal-container" id="modal-container">
      <div id="movie-modal">
        <div className="modal-overlay">
          <button id="return-btn" onClick={handleReturn}>
            Return
          </button>
          <div id="movie-info-container"></div>
        </div>
      </div>
    </div>
  );
}
