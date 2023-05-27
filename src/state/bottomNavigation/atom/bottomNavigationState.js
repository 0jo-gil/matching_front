import { atom } from "recoil";

// 하단 네비 리스트
const bottomNaviList = [
  {
    name: "홈",
    src: "/main",
    iconSrc: "",
  },
  {
    name: "리스트",
    src: "/post",
    iconSrc: "",
  },
  {
    name: "마이페이지",
    src: "/auth/mypage",
    iconSrc: "",
  },
];

export const bottomNaviState = atom({
  key: "bottomNaviState",
  default: bottomNaviList,
});
