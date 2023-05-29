import { atom } from "recoil";

const postFormData = {
  title: "",
  content: "",
  startedAt: "",
  endedAt: "",
  detail: "", // 목표
  categoryId: null,
  file: null,
};

export const postFormState = atom({
  key: "postFormState",
  default: postFormData,
});

export const postFormDataState = atom({
  key: "postFormDataState",
  default: null,
});
