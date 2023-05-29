const API_URL = {
  BASE_URL: process.env.REACT_APP_API_URL,
  METHOD: {
    GET: "get",
    POST: "post",
    PATCH: "patch",
    PUT: "put",
    DELETE: "delete",
  },
  USER: {
    SIGNIN: "/api/v1/member/sign-in",
    SIGNUP: "/api/v1/member/signup",
    LOGOUT: "/api/v1/member/logout",
    REISSUE: "/api/v1/member/reissue",
  },
  POST: {
    WRITE: "/api/v1/post/write",
    DETAIL: (params) => `/api/v1/post/${params.id}`,
    CATEGORY: "/api/v1/category",
  },
  CATEGORY: {
    LIST: "/api/v1/category",
  },
};

export default API_URL;
