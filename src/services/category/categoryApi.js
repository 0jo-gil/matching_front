import API_URL from "@services/constants";
import useAxios from "@hooks/useAxios";

const useCategoryApi = () => {
  const { requestApi } = useAxios();
  const { METHOD, CATEGORY } = API_URL;

  const getCategoryList = {
    key: "getCategoryList",
    queryFn: () => requestApi(METHOD.GET, CATEGORY.LIST),
  };

  return { getCategoryList };
};

export default useCategoryApi;
