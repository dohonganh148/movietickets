import actions from "../type";
import * as service from "../../services/bookingService";

// GET API lay danh sach banner
export const fetchBannersAction = () => async (dispatch) => {
  let res = await service.getBanners();
  res.data &&
    dispatch({
      type: actions.SET_BANNERS,
      payload: res.data.content,
    });
};

// GET API lay danh sach phim
export const fetchMovieListAction = () => async (dispatch) => {
  let res = await service.getMovieList();
  res.data && dispatch({
    type: actions.SET_MOVIE_LIST,
    payload: res.data.content,
  });
}

// GET API lay thong tin lich chieu phim
export const fetchMovieSchedule = (id) => async (dispatch) => {
  let res = await service.getMovieSchedule(id);
  res.data && dispatch({
    type: actions.SET_MOVIE_SCHEDULE,
    payload: res.data.content,
  })
}

// GET API lay danh sach phim phan trang
export const fetchMovies = (page = 1) => async (dispatch) => {
  let res = await service.getMovies(page);
  res.data && dispatch({
    type: actions.SET_MOVIES,
    payload: res.data.content,
  })
}

// GET API lay danh sach rap
export const fetchCinemaAction = () => async (dispatch) => {
  let res = await service.getCinemaList();
  res.data && dispatch({
    type: actions.SET_CINEMA_LIST,
    payload: res.data.content,
  })
}
