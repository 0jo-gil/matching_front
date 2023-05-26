import API_URL from "../constants";
import customAxios from "@utils/customAxios";

const { METHOD, USER } = API_URL;
const { requestApi } = customAxios();

// export const PostSignin = async (data) => {
//   return await requestApi(METHOD.POST, USER.SIGNIN, data);
// };

export const PostSignup = async (data) => {
  return await requestApi(METHOD.POST, USER.SIGNUP, data, {
    "Content-Type": "multipart/form-data",
  });
};

export const userApi = {
  signin: {
    key: "signin",
    queryFn: (params) => requestApi(METHOD.POST, USER.SIGNIN, params),
  },
  signup: {
    key: "signup",
    queryFn: (params) =>
      requestApi(METHOD.POST, USER.SIGNUP, params, {
        "Content-Type": "multipart/form-data",
      }),
  },
};
