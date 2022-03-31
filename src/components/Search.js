import React, { useState } from "react";
import "./Search.css";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=55f00f23a2d0dbcacd5d1f51e7248eb6&query=";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      props.getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <ul>
        <li>Home</li>
        <li>Help</li>
        <li>Favorites</li>
      </ul>
      <form onSubmit={handleOnSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}
