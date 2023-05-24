import { isAuthenticationState, loginState } from "@state/user/atoms/userState";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

const useAuthentication = () => {
  // 회원 인증 훅
  const ACCESS_TOKEN_KEY = "access_token";

  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const [isAuthentication, setIsAuthentication] = useRecoilState(
    isAuthenticationState
  );

  /**
   * 로그인 액세스 토큰 저장
   */
  const setAccessToken = useCallback((token) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }, []);
};

export default useAuthentication;
