import React from "react";
import { SPageTitle } from "@styled/common";
import FormInput from "@components/formInput/FormInput";
import FormFile from "@components/formInput/FormFile";
import { useRecoilState } from "recoil";
import { signupFormState } from "@state/user/atoms/userState";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signupFormValue, setSignupFormValue] = useRecoilState(signupFormState);
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    // const formData = new FormData();
    // const { profileImageUrl, ...rest } = signupFormValue;
    // const blob = new Blob([JSON.stringify(rest)], { type: 'application/json' });
    // formData.append('request', blob);
    // formData.append('file', profileImageUrl);
    // const result = PostSignup(formData)
    //     .then((res) => {
    //         navigate('/auth/complete');
    //     })
    //     .catch((err) => console.error(err));
  };

  return (
    <div>
      <SPageTitle>회원가입</SPageTitle>

      <FormInput name="email" label={"이메일"} onChange={setSignupFormValue} />
      <FormInput
        name="password"
        label={"패스워드"}
        onChange={setSignupFormValue}
      />
      <FormInput
        name="nickname"
        label={"닉네임"}
        onChange={setSignupFormValue}
      />

      <FormFile
        name="profileImageUrl"
        type={"single"}
        label={"프로필 이미지"}
        onChange={setSignupFormValue}
      />

      <button onClick={onSubmitHandler}>회원가입</button>
    </div>
  );
};

export default SignUp;
