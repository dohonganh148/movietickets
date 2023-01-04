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
  res.data &&
    dispatch({
      type: actions.SET_MOVIE_LIST,
      payload: res.data.content,
    });
};

// GET API lay thong tin lich chieu phim
export const fetchMovieSchedule = (id) => async (dispatch) => {
  let res = await service.getMovieSchedule(id);
  res.data &&
    dispatch({
      type: actions.SET_MOVIE_SCHEDULE,
      payload: res.data.content,
    });
};

// GET API lay danh sach phim phan trang
export const fetchMovies =
  (page = 1) =>
  async (dispatch) => {
    let res = await service.getMovies(page);
    res.data &&
      dispatch({
        type: actions.SET_MOVIES,
        payload: res.data.content,
      });
  };

// GET API lay danh sach rap
export const fetchCinemaAction = () => async (dispatch) => {
  let res = await service.getCinemaList();
  res.data &&
    dispatch({
      type: actions.SET_CINEMA_LIST,
      payload: res.data.content,
    });
};

// PAGE DetailMovie, get API lay thong tin lich chieu phim
export const fetchMovieDetailScheduleAction = (id) => async (dispatch) => {
  let res = await service.getMovieDetailSchedule(id);
  res.data &&
    dispatch({
      type: actions.SET_MOVIE_DETAIL_SCHEDULE,
      payload: res.data.content,
    });
};

// Page Booking, get API lay danh sach phong ve
export const fetchMovieBookingAction = (id) => async (dispatch) => {
  let res = await service.getMovieBooking(id);
  res.data &&
    dispatch({
      type: actions.SET_MOVIE_BOOKING,
      payload: res.data.content,
    });
};


export const setSelectedSeat = (seat) => (dispatch) => {
  dispatch({
    type: actions.SELECT_SEAT,
    payload: seat,
  });
};

export const setPurchaseSeat = (seatPurchase) => (dispatch) => {
  dispatch({
    type: actions.PURCHASE,
    payload: seatPurchase,
  })
}

export const setDeleteSeat = (seatDelete) => (dispatch) => {
  dispatch({
    type: actions.DELETE_SEAT,
    payload: seatDelete,
  })
}