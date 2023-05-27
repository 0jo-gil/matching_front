import DatePicker from "@components/datepicker/DatePicker";
import Editor from "@components/editor/Editor";
import FormInput from "@components/formInput/FormInput";
import FormSelect from "@components/formInput/FormSelect";
import { postFormState } from "@state/post/atom/postState";
import { PageTitle } from "@styled/common";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useCategory from "@hooks/useCategory";
import FormRadio from "@components/formInput/FormRadio";

function PostRegister() {
  const [postForm, setPostForm] = useRecoilState(postFormState);
  const { data } = useCategory();

  return (
    <div>
      <PageTitle>목표를 설정해주세요.</PageTitle>
      <FormInput name="title" label={"제목"} />
      <DatePicker
        name="startedAt"
        label={"시작일"}
        setValue={setPostForm}
        value={postForm}
      />
      <DatePicker
        name="endedAt"
        label={"종료일"}
        setValue={setPostForm}
        value={postForm}
      />
      <FormRadio
        desc={"목표 카테고리"}
        list={data?.categoryListValue}
        name="category"
      />
      {/* <FormSelect list={data?.categoryListValue} /> */}
      <FormInput name="plan" label={"목표"} />
      <Editor setValue={setPostForm} />
    </div>
  );
}

export default PostRegister;
