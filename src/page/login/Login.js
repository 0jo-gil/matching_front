import React from "react";
import FormInput from "../../components/FormInput";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/user/atoms/userState";
import { PostSignin } from "../../common/api/user/userApi";

function Login() {
  const [userValue, setUserValue] = useRecoilState(userState);

  const onSubmitHandler = () => {
    const result = PostSignin(userValue)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormInput name="email" label={"아이디"} onChange={setUserValue} />
      <FormInput name="password" label={"패스워드"} onChange={setUserValue} />

      <button onClick={onSubmitHandler}>제출</button>
    </div>
  );
}

export default Login;
