import React, { useEffect } from "react";
import useToast from "./../../common/hooks/useToast";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../../store/user/atoms/userState";
import usePopup from "@hooks/usePopup";

const Main = () => {
  const { firedToast } = useToast();
  const { showPopup } = usePopup();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  useEffect(() => {
    if (isLoggedIn?.loginState) return;

    firedToast({
      content: <Link to="/auth/login">가입 / 로그인하기</Link>,
      type: "login",
    });
  }, [isLoggedIn?.loginState]);

  const popupHandler = () => {
    showPopup({
      content: <Link to="/post/write">글쓰기</Link>,
    });
  };

  return (
    <div>
      <h1>MAIN</h1>
      <button onClick={popupHandler}>글쓰기</button>
    </div>
  );
};

export default Main;
