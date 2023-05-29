import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PostMain = lazy(() => import("@pages/post/list/PostList"));
const PostRegister = lazy(() => import("@pages/post/register/PostRegister"));
const PostDetail = lazy(() => import("@pages/post/detail/PostDetail"));

const PostRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<PostMain />} />
        <Route path="/register" element={<PostRegister />} />
        <Route path="/detail/:postId" element={<PostDetail />} />
      </Route>
    </Routes>
  );
};

export default PostRouter;
