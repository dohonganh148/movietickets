import requester from "./api";
import apiPath from "./apiPath";

export const getBanners = async () => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.BANNERS,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieList = async () => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.MOVIE_LIST,
      params: {
        maNhom: "GP06",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieSchedule = async (id) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.MOVIE_SCHEDULE,
      params: {
        maPhim: id,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getMovies = async (page) => {
  try{
    const res = await requester({
      method: "GET",
      url: apiPath.MOVIES,
      params: {
        maNhom: "GP06",
        soTrang: page,
        soPhanTuTrenTrang: 4,
      }
    });
    return res;
  } catch(err) {
    console.log(err)
  }
}

export const getCinemaList = async () => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.CINEMA_LIST,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getScheduleCinema = async (maHeThongRap) => {
  try{
    const res = await requester({
      method: "GET",
      url: apiPath.SCHEDULE_CINEMA + `?maHethongRap=${maHeThongRap}&maNhom=GP09`,
    });
    return res;
  } catch(err) {
    console.log(err)
  }
}


// PAGE Detail Movie
export const getMovieDetailSchedule = async (id) => {
  try{
    const res = await requester({
      method: "GET",
      url: apiPath.MOVIE_DETAIL_SCHEDULE,
      params: {
        maPhim: id,
      }
    });
    return res;
  } catch(err) {
    console.log(err)
  }
};

// BOOKING: Movie booking
export const getMovieBooking = async (id) => {
  try{
    const res = await requester({
      method: "GET",
      url: apiPath.MOVIE_BOOKING,
      params: {
        maLichChieu: id,
      }
    });
    return res;
  } catch(err) {
    console.log(err)
  }
}