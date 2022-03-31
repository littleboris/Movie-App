export default (state, action) => {
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
    default:
      return state;
  }
};
