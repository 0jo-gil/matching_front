import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 로그인 유저 데이터
const loginUserState = {
  email: "",
  name: "",
  nickname: "",
  profileImageUrl: "",
  accessToken: "",
  loginState: false,
};

// 로그인 폼
const loginFormData = {
  id: "",
  email: "",
  password: "",
  nickname: "",
  name: "",
};

// 회원가입 폼
const signupFormData = {
  email: "",
  password: "",
  name: "",
  nickname: "",
  profileImageUrl: "",
};

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: "loginState",
  default: loginUserState,
  effects_UNSTABLE: [persistAtom],
});

export const loginFormState = atom({
  key: "loginFormState",
  default: loginFormData,
});

export const signupFormState = atom({
  key: "signupState",
  default: signupFormData,
});

// 로그인 확인
export const isAuthenticationState = atom({
  key: "isAuthenticationState",
  default: false,
});
