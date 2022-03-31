import React from "react";
import "./MovieModal.css";
import "./Movie.css";

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

export default function MovieModal(props) {
  const movie = props.movie;
  const modalCont = document.getElementById("modal-container");
  console.log(movie.setVoteClass);

  const handleReturn = () => {
    modalCont.style.display = "none";
  };

  return (
    <section id="modal-container">
      <div
        id="movie-modal"
        style={{
          background: `url(${
            props.IMG_API + movie.poster_path
          }) center center / cover no-repeat fixed`,
        }}
      >
        <div className="modal-overlay">
          <div id="modal-info">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

            <span
              id="rating-box"
              className={`tag ${setVoteClass(movie.vote_average)}`}>
              {movie.vote_average}
            </span>
            <button id="return-btn" onClick={handleReturn}>
              Return
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

