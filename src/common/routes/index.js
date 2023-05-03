import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../../page/login/Login"));

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default PageRouter;
