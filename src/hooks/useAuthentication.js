import {
  isAuthenticationState,
  loginState,
  signinFormState,
  signupFormState,
} from "@state/user/atoms/userState";
import { ACCESS_TOKEN_KEY } from "@utils/constant";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import useCommonQuery from "./useCommonQuery";
import useUserApi from "@services/user/userApi";
import { useNavigate, Link } from "react-router-dom";
import useToast from "./useToast";

const useAuthentication = () => {
  const { firedToast } = useToast();
  // 회원 인증 훅
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const [isAuthentication, setIsAuthentication] = useRecoilState(
    isAuthenticationState
  );
  const [signinFormValue, setSigninFormValue] = useRecoilState(signinFormState);
  const [signupFormValue, setSignupFormValue] = useRecoilState(signupFormState);

  const navigate = useNavigate();

  const { signin, signup, logout } = useUserApi();

  useEffect(() => {
    if (isAuthentication) return;
    firedToast({
      content: <Link to="/auth/login">가입 / 로그인하기</Link>,
      type: "login",
    });
  }, [isAuthentication]);

  /**
   * 로그인 액세스 토큰 저장
   */
  const setAccessToken = useCallback((token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }, []);

  const removeAccessToken = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }, []);

  // 회원 정보 초기화
  const userInitState = useCallback(() => {
    removeAccessToken();
    setIsAuthentication(false);
    setLoginUserState();
  }, []);

  // 로그인
  const { request: userSignin } = useCommonQuery({
    query: signin,
    params: signinFormValue,
    callbacks: {
      onSuccess: (response) => {
        const { data } = response;
        const { accessToken } = data;
        // 토큰 저장
        setAccessToken(accessToken);
        // 회원 상태 저장
        setLoginUserState({ ...data });
        // 로그인 상태
        setIsAuthentication(true);
        navigate("/main");
      },
      onError: (err) => {
        console.log(err);
      },
    },
  });

  // 회원가입
  const { request: userSignup } = useCommonQuery({
    query: signup,
    params: signupFormValue,
    callbacks: {
      onSuccess: (data) => {
        // navigate("");
      },
      onError: (err) => {
        console.log(err);
      },
    },
  });

  // 로그아웃
  const { request: userLogout } = useCommonQuery({
    query: logout,
    params: {},
    callbacks: {
      onSuccess: () => {
        userInitState();
        navigate("/");
      },
      onError: (err) => {
        console.log(err);
      },
    },
  });

  return {
    data: { loginUserState, isAuthentication },
    action: {
      userSignin,
      userSignup,
      userLogout,
    },
  };
};

export default useAuthentication;
