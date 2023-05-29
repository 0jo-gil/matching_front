import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "@hooks/usePost";

const PostDetail = () => {
  const {
    action: { getDetailPostHandler },
  } = usePost();

  useEffect(() => {
    getDetailPostHandler();
  }, []);

  return <div></div>;
};

export default PostDetail;
