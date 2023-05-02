import { atom } from "recoil";

const initialState = {
  email: "",
  password: "",
  nickname: "",
  name: "",
};

export const userState = atom({
  key: "userState",
  default: initialState,
});
