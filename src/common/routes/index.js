import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../../page/login/Login"));
const Chat = lazy(() => import("../../page/chat/Chat"));

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default PageRouter;
