import { GetCategoryList } from "@api/chat/postApi";
import { selector } from "recoil";

export const categoryInfo = selector({
  key: "categoryInfo",
  get: async () => {
    const response = await GetCategoryList();

    return response;
  },
});
