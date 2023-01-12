import actions from "../type";

const initialState = {
    profile: null,
    typeOfUser: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case actions.SET_PROFILE:
        return {
          ...state,
          profile: payload,
        };
      case actions.TYPE_USER:
        return {
          ...state,
          typeOfUser: payload,
        }
  
      default:
        return { ...state };
    }
  };
  
  export default reducer;