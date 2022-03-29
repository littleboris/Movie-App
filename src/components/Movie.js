import React from "react";
import "./Movie.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
//"https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=7dd175e8e4c6252ca5cf5e63ea198b53&language=en-US";

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

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span
          className={`tag ${setVoteClass(vote_average)}
      `}
        >
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
