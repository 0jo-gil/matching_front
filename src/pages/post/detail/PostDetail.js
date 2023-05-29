import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "@hooks/usePost";
import Banner from "@components/banner/Banner";

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
          <Banner list={postDetailData?.photoList} viewNum={1} />
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
