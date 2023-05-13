import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../store/user/atoms/userState";

import AuthRouter from "./AuthRouter";

const Main = lazy(() => import("../../page/main/Main"));
const Chat = lazy(() => import("../../page/chat/Chat"));

const PageRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default PageRouter;
