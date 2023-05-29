import usePostApi from "@services/post/postApi";
import useCommonQuery from "./useCommonQuery";
import { useRecoilState } from "recoil";
import { postFormDataState, postFormState } from "@state/post/atom/postState";

const usePost = () => {
  const { writePost } = usePostApi();
  const [postFormData, setPostFormData] = useRecoilState(postFormDataState);

  // 글쓰기
  const { request: writePostHandler } = useCommonQuery({
    query: writePost,
    params: postFormData,
    callbacks: {
      onSuccess: (response) => {
        console.log(response);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });
  return {
    data: {},
    action: { writePostHandler },
  };
};

export default usePost;
