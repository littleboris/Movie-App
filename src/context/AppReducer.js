export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      //console.log("hej");
      if (state.watchlist.includes(action.payload)) {
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
