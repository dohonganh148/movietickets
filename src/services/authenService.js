import requester from "./api";
import apiPath from "./apiPath";

export const getUserLogin = async (userLogin) => {
    try{
        const res = await requester({
            method: "POST",
            url: apiPath.PROFILE,
            data: userLogin,
        });
        return res;
    } catch(err) {
        throw(err)
    }
};

// Lấy thông tin tài khoản đã đăng nhập
export const getProfile = async () => {
    try{
        const res = await requester({
            method: "POST",
            url: apiPath.PROFILE_ACTION,
        });
        return res;
    } catch(err) {
        console.log(err)
    }
};

// POST thong tin user signup
export const signUp = async (userSignup) => {
    try{
        const res = await requester({
            method: "POST",
            url: apiPath.USER_SIGNUP,
            data: userSignup,
        });
        return res;
    } catch(err) {
        console.log(err);
    }
}

// // get API lay danh sach loai nguoi dung
export const getTypeOfUser = async() => {
    try{
        const res  = await requester({
            method: "GET",
            url: apiPath.TYPE_USER,
        });
        return res;
    } catch(err) {
        console.log(err)
    }
}

// PUT thong tin user update profile
export const updateProfile = async (values) => {
    try{
        const res = await requester({
            method: "PUT",
            url: apiPath.UPDATE_PROFILE,
            data: values,
        });
        return res;
    } catch(err) {
        console.log(err)
    }
}