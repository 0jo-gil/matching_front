import React from "react";
import { Cookies } from "react-cookie";

const useCookie = (name, value, options = {}) => {
  const cookies = new Cookies();

  const setCookie = (name, value, options) => {
    return cookies.set(name, value, { ...options });
  };

  const getCookie = (name) => {
    return cookies.get(name);
  };
  return <div></div>;
};

export default useCookie;
