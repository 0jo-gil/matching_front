import { selector } from "recoil";
import axios from "axios";
import { userState } from "../atoms/userState";

export const getUserSelector = selector({
  key: "userState",
  get: async ({ get }) => {
    try {
      const { data } = await axios.post({
        url: "/api/v1/member/signup",
        data: {
          ...userState,
        },
      });
      console.log(data);
    } catch (err) {
      throw err;
    }
  },
  set: ({ set }, newValue) => {
    console.log(newValue);
    set(userState, newValue);
  },
});
