import React, { useEffect } from "react";
import useCommonQuery from "./useCommonQuery";
import useCategoryApi from "@services/category/categoryApi";
import { useRecoilState } from "recoil";
import { categoryListState } from "@state/category/atom/categoryState";

const useCategory = () => {
  const { getCategoryList } = useCategoryApi();
  const [categoryListValue, setCategoryListValue] =
    useRecoilState(categoryListState);

  useEffect(() => {
    getCategory();
  }, []);

  const { request: getCategory } = useCommonQuery({
    query: getCategoryList,
    params: {},
    callbacks: {
      onSuccess: (response) => {
        if (!response) return;
        const { data } = response;
        setCategoryListValue([...response]);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  });
  return {
    data: { categoryListValue },
    action: {},
  };
};

export default useCategory;
