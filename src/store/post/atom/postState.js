import { atom } from "recoil";

const postFormData = {
  title: "",
  content: "",
  startedAt: "",
  endedAt: "",
  detail: "", // 목표
  category: 0,
  file: [],
};

export const postFormState = atom({
  key: "postFormState",
  default: postFormData,
});
