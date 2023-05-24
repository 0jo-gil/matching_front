import customAxios, { METHOD } from "../../utils/customAxios";

export const getChatMessageList = () => {
  const { requestApi } = customAxios();
  return {
    key: "getChatMessageList",
    queryFn: (params) => requestApi(METHOD.GET, "/chatroom/1/pub"),
  };
};
