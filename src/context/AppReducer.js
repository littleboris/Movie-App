export default (state, action) => {
  // uses the action object and performs a state update, returning the new state.
  //Checks if the state has been changed, if it differs it updates with the new value
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      // action.payload Is the movie i click on
      if (
        state.watchlist.find((movie) => movie.title === action.payload.title)
      ) {
        return state;
      } else
        return {
          ...state,
          watchlist: [action.payload, ...state.watchlist],
        };

    case "REMOVE_MOVIE_FROM_WATCHLIST":
      // action.payload Is the movie i click on

      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.title !== action.payload.title
        ),
      };
    default:
      return state;
  }
};
