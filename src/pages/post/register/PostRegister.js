import DatePicker from "@components/datepicker/DatePicker";
import FormInput from "@components/formInput/FormInput";
import { postFormDataState, postFormState } from "@state/post/atom/postState";
import { SPageTitle, SWrap } from "@styled/common";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useCategory from "@hooks/useCategory";
import FormRadio from "@components/formInput/FormRadio";
import FormTextArea from "@components/formInput/FormTextArea";
import usePost from "@hooks/usePost";
import FormFile from "@components/formInput/FormFile";

function PostRegister() {
  const [postForm, setPostForm] = useRecoilState(postFormState);
  const [postFormData, setPostFormData] = useRecoilState(postFormDataState);
  const { data } = useCategory();

  const {
    action: { writePostHandler },
  } = usePost();

  useEffect(() => {
    console.log(postForm);
  }, [postForm]);

  const onSubmitHandler = async () => {
    new Promise((resolve) => {
      const formData = new FormData();
      const { file, ...rest } = postForm;

      formData.append(
        "request",
        new Blob([JSON.stringify(rest)], { type: "application/json" })
      );

      if (file) {
        for (let list of file) {
          formData.append("file", list);
        }
      }
      resolve(setPostFormData(formData));
    }).then(() => {
      console.log(postFormData);
      writePostHandler();
    });
  };

  return (
    <SWrap>
      <SPageTitle>목표를 설정해주세요.</SPageTitle>
      <FormInput
        name="title"
        label={"제목"}
        condition={true}
        setValue={setPostForm}
        placeholder={"예) 개발 스터디"}
      />

      <DatePicker
        label={"기간"}
        setValue={setPostForm}
        value={postForm}
        type={"dual"}
      />
      <FormRadio
        desc={"목표 카테고리"}
        list={data?.categoryListValue}
        name="categoryId"
        setValue={setPostForm}
      />
      <FormInput
        name="datail"
        label={"목표"}
        placeholder={"예) 1일 1커밋 도전"}
        setValue={setPostForm}
      />

      <FormTextArea
        label="설명"
        placeholder="예) 깃허브 1일 1커미 실천하고 인증하기"
      />

      <FormFile name="file" setValue={setPostForm} />

      <button onClick={onSubmitHandler}>등록하기</button>
    </SWrap>
  );
}

export default PostRegister;
