import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/user/atoms/userState";

const Login = lazy(() => import("../../page/login/Login"));
const Chat = lazy(() => import("../../page/chat/Chat"));

const PageRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  return (
    <Routes>
      {/* {!isLoggedIn ? ( */}
      <Route path="/login" element={<Login />} />
      {/* ) : ( */}
      <Route path="/chat" element={<Chat />} />
      {/* )} */}
    </Routes>
  );
};

export default PageRouter;
