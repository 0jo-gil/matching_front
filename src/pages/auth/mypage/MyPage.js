import { loginState } from "@store/user/atoms/userState";
import { PageTitle } from "@styled/common";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ProfileImg } from "./style";
import { Link } from "react-router-dom";

function MyPage() {
  const [loginUserState] = useRecoilState(loginState);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    loginUserState?.accessToken !== "" ? setIsLogin(true) : setIsLogin(false);
  }, [loginUserState?.accessToken]);

  return (
    <div>
      <PageTitle>마이페이지</PageTitle>

      {isLogin ? (
        <div>
          <ProfileImg>
            <img src={loginUserState?.profileImageUrl} alt="프로필 이미지" />
          </ProfileImg>
          <div>
            <p>{loginUserState?.name} 님</p>
            <p>{loginUserState?.nickname}</p>
          </div>
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
