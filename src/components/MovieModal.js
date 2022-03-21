import React from "react";
import "./MovieModal.css";

export default function MovieModal() {
  const modalCont = document.getElementById("modal-container");

  const handleReturn = () => {
    modalCont.style.display = "none";
  };

  return (
    <div className="modal-container" id="modal-container">
      <div id="movie-modal">
        <button id="return-btn" onClick={handleReturn}>
          Return
        </button>
        <div id="movie-info"></div>
      </div>
    </div>
  );
}
