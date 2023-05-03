import API_URL from "../constants";
import customAxios from "../../utils/customAxios";

export const PostSignin = async (data) => {
  const { METHOD, USER } = API_URL;
  const { requestApi } = customAxios();

  return await requestApi(METHOD.POST, USER.SIGNIN, data);
};

// export default PostSignin;
