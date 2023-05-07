import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const initialState = {
  id: "",
  email: "",
  password: "",
  nickname: "",
  name: "",
};

const loginUserState = {
  email: "",
  name: "",
  nickname: "",
  profileImageUrl: "",
  accessToken: "",
  loginState: false,
};

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: initialState,
});

export const loginState = atom({
  key: "loginState",
  default: loginUserState,
  effects_UNSTABLE: [persistAtom],
});
