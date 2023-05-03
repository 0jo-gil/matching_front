import React, { useMemo } from "react";
import { useQuery } from "react-query";

const useQueryHook = ({ query, params = undefined, callback = {} }) => {
  const result = useQuery([query.key, params], () => query.fn(params), {
    ...callback,
  });

  const status = useMemo(() => {
    return {
      isLoading: result.isLoading,
      isSuccess: result.isSuccess,
      isFetching: result.isFetching,
      isRefetching: result.isRefetching,
      isError: result.isError,
      isLoadingError: result.isLoadingError,
    };
  }, [
    result.isLoading,
    result.isSuccess,
    result.isFetching,
    result.isRefetching,
    result.isError,
    result.isLoadingError,
  ]);

  //   const { isLoading, isFetching, isRefetching } = result;
  //   useEffect(() => {
  //     if (isLoading || isFetching || isRefetching) showLoading();
  //     else hideLoading();
  //   }, [isLoading, isFetching, isRefetching, showLoading, hideLoading]);

  const request = result.refetch;

  return { result, status, request };
};

export default useQueryHook;
