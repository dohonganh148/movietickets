import actions from "../type";
import * as service from "../../services/authenService";

// Luu data user login
export const loginAction = (userLogin) => async (dispatch) => {
  let res = await service.getUserLogin(userLogin);
  dispatch({
    type: actions.SET_PROFILE,
    payload: res.data.content,
  });

  // set localStorage => refresh token || fingerprint
  // or set cookies
  res.data && localStorage.setItem("token", res.data.content.accessToken);
  // get localStorage khi cần sử dụng
};

// Lấy thông tin tài khoản đã đăng nhập
export const fetchProfileAction = () => async (dispatch) => {
  let res = await service.getProfile();
  console.log(res);
  res.data &&
    dispatch({
      type: actions.SET_PROFILE,
      payload: res.data.content,
    });
};

export const logoutAction = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: actions.SET_PROFILE,
    payload: null,
  });
};

// GET API lay danh sach loai nguoi dung
export const fetchTypeOfUser = () => async (dispatch) => {
  let res = await service.getTypeOfUser();
  res?.data &&
    dispatch({
      type: actions.TYPE_USER,
      payload: res.data.content,
    });
};
