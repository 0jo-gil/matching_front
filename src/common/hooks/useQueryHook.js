import React, { useMemo, useEffect } from "react";
import { useQuery } from "react-query";

const useQueryHook = ({ query, params = undefined, callbacks = {} }) => {
  const result = useQuery([query.key, params], () => query.queryFn(params), {
    ...callbacks,
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

  const { isLoading, isFetching, isRefetching } = result;
  useEffect(() => {
    if (isLoading || isFetching || isRefetching) {
    } else {
    }
  }, [isLoading, isFetching, isRefetching]);

  const request = result.refetch;

  return { result, status, request };
};

export default useQueryHook;
