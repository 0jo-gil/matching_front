import API_URL from "@services/constants";
import useAxios from "@hooks/useAxios";

const usePostApi = () => {
  const { requestApi } = useAxios();
  const { METHOD, POST } = API_URL;

  const writePost = {
    key: "writePost",
    queryFn: (params) =>
      requestApi(METHOD.POST, POST.WRITE, params, {
        "Content-Type": "multipart/form-data",
      }),
  };

  const getDetailPost = {
    key: "getDetailPost",
    queryFn: (params) => requestApi(METHOD.GET, POST.DETAIL(params)),
  };

  return {
    writePost,
    getDetailPost,
  };
};

export default usePostApi;
