import { atom } from "recoil";

export const popupState = atom({
  key: "popupState",
  default: {
    visible: false,
    list: [],
  },
});
