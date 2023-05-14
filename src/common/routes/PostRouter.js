import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PostMain = lazy(() => import("@page/post/list/PostList"));
const PostRegister = lazy(() => import("@page/post/register/PostRegister"));

const PostRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<PostMain />} />
        <Route path="/register" element={<PostRegister />} />
      </Route>
    </Routes>
  );
};

export default PostRouter;
