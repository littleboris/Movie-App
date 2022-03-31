import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//Initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
// Create context
export const GlobalContext = createContext(initialState);

// Provider component // (props) was before change
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   useEffect(() => {
  //     localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  //     localStorage.setItem("watched", JSON.stringify(state.watched));
  //   }, [state]);

  //Actions, title instead of movie??
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};