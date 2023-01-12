const sliceName = "booking";
const sliceName2 = "authen";

const actions = {
    SET_BANNERS: `${sliceName}/SET_BANNERS`,
    SET_MOVIE_LIST: `${sliceName}/SET_MOVIE_LIST`,
    SET_MOVIE_SCHEDULE: `${sliceName}/SET_MOVIE_SCHEDULE`,
    SET_MOVIES: `${sliceName}/SET_MOVIES`,
    SET_CINEMA_LIST: `${sliceName}/SET_CINEMA_LIST`,
    SET_SCHEDULE_CINEMA: `${sliceName}/SET_SCHEDULE_CINEMA`,
    SET_PROFILE: `${sliceName2}/SET_PROFILE`,
    SET_MOVIE_DETAIL_SCHEDULE: `${sliceName}/SET_MOVIE_DETAIL_SCHEDULE`,
    SET_MOVIE_BOOKING: `${sliceName}/SET_MOVIE_BOOKING`,
    SELECT_SEAT: `${sliceName}/SELECT_SEAT`,
    PURCHASE: `${sliceName}/PURCHASE`,
    DELETE_SEAT: `${sliceName}/DELETE_SEAT`,
    TYPE_USER: `${sliceName2}/TYPE_USER`,
};

export default actions;