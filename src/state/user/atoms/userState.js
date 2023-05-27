import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 로그인 유저 데이터
const loginUserState = {
  email: "",
  name: "",
  nickname: "",
  profileImageUrl: "",
  accessToken: "",
};

// 로그인 폼
const signinFormData = {
  email: "",
  password: "",
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

export const signinFormState = atom({
  key: "signinState",
  default: signinFormData,
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
