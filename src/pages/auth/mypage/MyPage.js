import React, { useEffect, useState } from "react";
import { isAuthenticationState, loginState } from "@state/user/atoms/userState";
import { PageTitle } from "@styled/common";
import { useRecoilState } from "recoil";
import { ProfileImg } from "./style";
import { Link } from "react-router-dom";
import useAuthentication from "@hooks/useAuthentication";

function MyPage() {
  const [loginUserState] = useRecoilState(loginState);
  const [isAuthentication] = useRecoilState(isAuthenticationState);

  const { data, action } = useAuthentication();

  const logoutHandler = () => {
    action.userLogout();
  };

  return (
    <div>
      <PageTitle>마이페이지</PageTitle>

      {isAuthentication ? (
        <div>
          <ProfileImg>
            <img src={loginUserState?.profileImageUrl} alt="프로필 이미지" />
          </ProfileImg>
          <div>
            <p>{loginUserState?.name} 님</p>
            <p>{loginUserState?.nickname}</p>
          </div>
          <button onClick={logoutHandler}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인이 필요합니다.</p>
          <Link to="/auth/login">로그인</Link>
        </div>
      )}
    </div>
  );
}

export default MyPage;
