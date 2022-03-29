import React from "react";
import "./MovieModal.css";

export default function MovieModal(props) {
  const modalCont = document.getElementById("modal-container");

  const handleReturn = () => {
    modalCont.style.display = "none";
  };

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
