import axios from "axios";
import { useCallback, useState } from "react";
import { ACCESS_TOKEN_KEY } from "@utils/constant";
import useReissue from "./useReissue";
import useAuthentication from "./useAuthentication";

export const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
};

export const BASE_URL = process.env.REACT_APP_API_URL;

const headersConfig = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

const useAxios = () => {
  const { reissue } = useReissue();
  // const { setAccessToken } = useAuthentication();

  const client = axios.create();

  // 요청
  client.interceptors.request.use(
    (config) => {
      let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

      if (!accessToken) {
        config.headers.Authorization = null;
        return config;
      }

      if (accessToken && config.headers) {
        config.headers.Authorization = `bearer ${accessToken}`;
        return config;
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // 토큰 에러 시 재인증 요청
  client.interceptors.response.use(
    (response) => {
      if (response) {
        localStorage.setItem(ACCESS_TOKEN_KEY, response?.data?.accessToken);
      }

      return response;
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error;

      if (status === 401) {
        const { data } = reissue();

        config.headers.Authorization = `bearer ${data?.accessToken}`;

        // setAccessToken(data?.accessToken);

        return client(config);
      }

      return Promise.reject(error);
    }
  );

  const requestApi = useCallback(async (method, url, data, header = {}) => {
    let params = {};

    method === METHOD.GET
      ? (params = { params: JSON.stringify(data) })
      : (params = { data: JSON.stringify(data) });

    if (!data) params = {};

    const axiosParams = {
      method,
      url: `${BASE_URL}${url}`,
      ...params,
      headers: {
        ...headersConfig,
        ...header,
      },
      timeout: 30000,
    };

    const result = await client(axiosParams);

    return result.data;
  }, []);

  return { requestApi };
};

export default useAxios;
