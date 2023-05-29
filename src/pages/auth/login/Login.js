import FormInput from "@components/formInput/FormInput";

import { useRecoilState } from "recoil";
import { signinFormState } from "@state/user/atoms/userState";
import { Link } from "react-router-dom";
import useAuthentication from "@hooks/useAuthentication";

function Login() {
  const [loginFormValue, setLoginFormValue] = useRecoilState(signinFormState);
  const { data, action } = useAuthentication();

  const onSubmitHandler = async () => {
    await action.userSignin();
  };

  return (
    <div>
      <FormInput name="email" label={"아이디"} setValue={setLoginFormValue} />
      <FormInput
        name="password"
        label={"패스워드"}
        setValue={setLoginFormValue}
      />
      <Link to="/auth/signup">회원가입</Link>
      <button onClick={onSubmitHandler}>제출</button>
    </div>
  );
}

export default Login;
