import useAxios from "@hooks/useAxios";
import API_URL from "../constants";

const useUserApi = () => {
  const { requestApi } = useAxios();
  const { METHOD, USER } = API_URL;

  const signin = {
    key: "signin",
    queryFn: (params) => requestApi(METHOD.POST, USER.SIGNIN, params),
  };

  const signup = {
    key: "signup",
    queryFn: (params) =>
      requestApi(METHOD.POST, USER.SIGNUP, params, {
        "Content-Type": "multipart/form-data",
      }),
  };
  const logout = {
    key: "logout",
    queryFn: (params) => requestApi(METHOD.POST, USER.LOGOUT),
  };

  const reissue = {
    key: "reissue",
    queryFn: (params) => requestApi(METHOD.POST, USER.REISSUE),
  };

  return {
    signin,
    signup,
    logout,
    reissue,
  };
};

export default useUserApi;
