import axios from "axios";
import { useCallback, useState } from "react";

export const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
};

export const BASE_URL = process.env.REACT_APP_API_URL;

let headersConfig = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

const customAxios = () => {
  const request = axios.create();

  const requestApi = async (method, url, data, header = {}) => {
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

    const result = await request(axiosParams);

    return result.data;
  };

  return { requestApi };
};

export default customAxios;
