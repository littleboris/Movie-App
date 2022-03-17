import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Featured from "./components/Featured";
import "./App.css";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=7dd175e8e4c6252ca5cf5e63ea198b53&language=en-US&sort_by=popularity.desc&";

export default function App() {
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

  // Det jag vill ska renderas ut deklarerar jag här till components, och använder mig av props i components
  // Exempelvis, i Search.js säger jag att det kommer finnas en variabel i props som heter "getMovies"
  return (
    <div>
      <header>
        <Search getMovies={getMovies} />
      </header>
      <section>
        <Featured movies={movies} />
      </section>
    </div>
  );
}
