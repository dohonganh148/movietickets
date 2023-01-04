import actions from "../type";

const initialState = {
  banners: [],
  movieList: [],
  movieSchedule: [],
  movies: [],
  cinemaList: [],
  movieDetailSchedule: {},
  movieBooking: {},
  selectedSeat: [],
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
      };
    case actions.SET_CINEMA_LIST:
      return {
        ...state,
        cinemaList: payload,
      };
    case actions.SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case actions.SET_MOVIE_DETAIL_SCHEDULE:
      return {
        ...state,
        movieDetailSchedule: payload,
      };
    case actions.SET_MOVIE_BOOKING:
      return {
        ...state,
        movieBooking: payload,
      };
    case actions.SELECT_SEAT: {
      const data = [...state.selectedSeat];
      const index = data.findIndex((item) => item.maGhe === payload.maGhe);
      if (index > -1) {
        data.splice(index, 1);
      } else {
        data.push(payload);
      }
      return { ...state, selectedSeat: data };
    };
    case actions.PURCHASE:{
      const data = state.movieBooking;
      data.danhSachGhe.map( (item) => {
        state.selectedSeat.forEach( ele => {
          if(ele.maGhe === item.maGhe) {
            item.daDat = true
          }
        });
        return item
      });
      return {...state, movieBooking: data, selectedSeat: []}
    }

    default:
      return { ...state };
  }
};

export default reducer;
