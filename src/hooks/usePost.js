import usePostApi from "@services/post/postApi";
import useCommonQuery from "./useCommonQuery";
import { useRecoilState } from "recoil";
import {
  postDetailState,
  postFormDataState,
  postFormState,
} from "@state/post/atom/postState";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const usePost = () => {
  const { writePost, getDetailPost, getPostByCategoryCount } = usePostApi();
  const [postFormData, setPostFormData] = useRecoilState(postFormDataState);
  const [postDetailData, setPostDetailData] = useRecoilState(postDetailState);

  // 각 카테고리별 참가자 순 조회 리스트
  const [postByCategoryList, setPostByCategoryList] = useState([]);

  // 카테고리 id
  const [categoryId, setCategoryId] = useState({
    categoryId: 1,
  });

  const navigate = useNavigate();
  const { postId } = useParams();

  // 글쓰기
  const { request: writePostHandler } = useCommonQuery({
    query: writePost,
    params: postFormData,
    callbacks: {
      onSuccess: (response) => {
        const { data } = response;
        navigate(`/post/detail/${data}`);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  // 글상세조회
  const { request: getDetailPostHandler } = useCommonQuery({
    query: getDetailPost,
    params: { id: postId },
    callbacks: {
      onSuccess: (response) => {
        setPostDetailData(response?.data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  // 카테고리별 참가자 순 리스트 조회
  const { request: getPostByCategoryCountHandler } = useCommonQuery({
    query: getPostByCategoryCount,
    params: { ...categoryId },
    callbacks: {
      onSuccess: (response) => {
        if (!response) return;
        setPostByCategoryList((prev) => [...response?.data?.content]);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  useEffect(() => {
    getPostByCategoryCountHandler();
  }, [categoryId, getPostByCategoryCountHandler]);

  return {
    data: { postDetailData, postByCategoryList },
    action: {
      writePostHandler,
      getDetailPostHandler,
      setCategoryId,
    },
  };
};

export default usePost;
