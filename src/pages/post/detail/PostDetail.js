import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "@hooks/usePost";

const PostDetail = () => {
  const {
    data: { postDetailData },
    action: { getDetailPostHandler },
  } = usePost();

  useEffect(() => {
    getDetailPostHandler();
  }, []);

  return (
    <div>
      {postDetailData && (
        <>
          <div>{postDetailData?.title}</div>
          <div>{postDetailData?.content}</div>
          <div>{postDetailData?.author}</div>
          <div>{postDetailData?.createdAt}</div>
        </>
      )}
    </div>
  );
};

export default PostDetail;
