import usePostApi from "@services/post/postApi";
import useCommonQuery from "./useCommonQuery";
import { useRecoilState } from "recoil";
import {
  postDetailState,
  postFormDataState,
  postFormState,
} from "@state/post/atom/postState";
import { useNavigate, useParams } from "react-router-dom";

const usePost = () => {
  const { writePost, getDetailPost } = usePostApi();
  const [postFormData, setPostFormData] = useRecoilState(postFormDataState);
  const [postDetailData, setPostDetailData] = useRecoilState(postDetailState);

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
  return {
    data: { postDetailData },
    action: { writePostHandler, getDetailPostHandler },
  };
};

export default usePost;
