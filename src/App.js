import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import FormInput from "./components/FormInput";
import { userState } from "./recoil/user/atoms/userState";

function App() {
  return (
    <RecoilRoot>
      <FormInput name="email" label={"아이디"} />
      <FormInput name="password" label={"패스워드"} />
      <FormInput name="nickname" label={"닉네임"} />
      <FormInput name="name" label={"이름"} />
    </RecoilRoot>
  );
}

export default App;
