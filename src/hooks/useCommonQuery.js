import { useMemo, useState } from "react";
import { useQuery } from "react-query";

const useCommonQuery = ({
  query,
  params = null,
  callbacks = {},
  initEnabled = false,
}) => {
  const [enabled, setEnabled] = useState(initEnabled);
  const result = useQuery([query.key], () => query.queryFn(params), {
    enabled: enabled,
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

  const request = result.refetch;
  return { result, status, request };
};

export default useCommonQuery;
