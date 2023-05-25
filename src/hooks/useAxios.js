import axios from 'axios';
import { useCallback, useState } from 'react';
import { ACCESS_TOKEN_KEY } from '@utils/constant';

export const METHOD = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch',
};

export const BASE_URL = process.env.REACT_APP_API_URL;

const headersConfig = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
};

const useAxios = () => {
    const client = axios.create();

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
                const originalRequest = config;
            }
        }
    );

    const requestApi = useCallback((method, url, data) => {
        let params = {};

        method === METHOD.GET ? (params = { params: JSON.stringify(data) }) : (params = { data: JSON.stringify(data) });

        if (!data) params = {};

        const axiosParams = {
            method,
            url: `${BASE_URL}${url}`,
            ...params,
            headers: {
                ...headersConfig,
            },
            timeout: 30000,
        };

        const result = client(axiosParams);

        return result.data;
    }, []);

    return { requestApi };
};

export default useAxios;
