import React from "react";
import FormInput from "@components/formInput/FormInput";

import { useRecoilState } from "recoil";
import { loginState, userState } from "../../store/user/atoms/userState";
import { PostSignin } from "../../common/api/user/userApi";
import { Link } from "react-router-dom";

function Login() {
  const [userValue, setUserValue] = useRecoilState(userState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const onSubmitHandler = async () => {
    const result = await PostSignin(userValue)
      .then((res) => {
        setIsLoggedIn((prev) => ({
          ...prev,
          ...res,
          loginState: true,
        }));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormInput name="email" label={"아이디"} onChange={setUserValue} />
      <FormInput name="password" label={"패스워드"} onChange={setUserValue} />

      <Link to="/signup">회원가입</Link>
      <button onClick={onSubmitHandler}>제출</button>
    </div>
  );
}

export default Login;
