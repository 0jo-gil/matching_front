import API_URL from "@api/constants";
import customAxios from "@utils/customAxios";

const { METHOD, POST } = API_URL;
const { requestApi } = customAxios();

export const PostWrite = async (data, token) => {
  return await requestApi(METHOD.POST, POST.WRITE, data, {
    Authorization: token,
  });
};

export const GetCategoryList = async (data) => {
  return await requestApi(METHOD.GET, POST.CATEGORY);
};
