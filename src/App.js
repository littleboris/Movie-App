import React, { useEffect, useState } from "react";

import Movie from "./components/Movie";
import "./App.css";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=7dd175e8e4c6252ca5cf5e63ea198b53&language=en-US&sort_by=popularity.desc&";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=55f00f23a2d0dbcacd5d1f51e7248eb6&query=";
//"https://api.themoviedb.org/3/search/movie?&api_key=7dd175e8e4c6252ca5cf5e63ea198b53&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
