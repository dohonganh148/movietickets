import actions from "../type";

const initialState = {
  banners: [],
  movieList: [],
  movieSchedule: [],
  movies: [],
  cinemaList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_BANNERS:
      return {
        ...state,
        banners: payload,
      };
    case actions.SET_MOVIE_LIST:
      return {
        ...state,
        movieList: payload,
      };
    case actions.SET_MOVIE_SCHEDULE:
      return {
        ...state,
        movieSchedule: payload,
      }
    case actions.SET_CINEMA_LIST:
      return {
        ...state,
        cinemaList: payload,
      };
    case actions.SET_MOVIES:
      return {
        ...state,
        movies: payload,
      }

    default:
      return { ...state };
  }
};

export default reducer;
