import DatePicker from "@components/datepicker/DatePicker";
import Editor from "@components/editor/Editor";
import FormInput from "@components/formInput/FormInput";
import FormSelect from "@components/formInput/FormSelect";
import { postFormState } from "@store/post/atom/postState";
import { categoryInfo } from "@store/post/selectors/categorySelector";
import { PageTitle } from "@styled/common";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

function PostRegister() {
  const [postForm, setPostForm] = useRecoilState(postFormState);
  const categoryList = useRecoilValue(categoryInfo);

  useEffect(() => {}, [postForm]);

  return (
    <div>
      <PageTitle>글쓰기</PageTitle>
      <FormInput name="title" />
      <FormSelect list={categoryList} />
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
      <FormInput name="plan" label={"목표"} />
      <Editor setValue={setPostForm} />
    </div>
  );
}

export default PostRegister;
