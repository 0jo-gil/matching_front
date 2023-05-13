import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("@page/auth/login/Login"));
const SignUp = lazy(() => import("@page/auth/signup/SignUp"));
const SignUpComplete = lazy(() => import("@page/auth/signup/SignUpComplete"));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="complete" element={<SignUpComplete />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
