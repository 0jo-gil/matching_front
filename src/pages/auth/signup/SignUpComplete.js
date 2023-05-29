import { SPageTitle } from "@styled/common";
import React from "react";
import { useNavigate } from "react-router-dom";

function SignUpComplete() {
  const navigate = useNavigate();
  return (
    <div>
      <SPageTitle>회원가입 완료</SPageTitle>

      <button onClick={() => navigate("/")}>메인으로</button>
      <button onClick={() => navigate("/auth/login")}>로그인</button>
    </div>
  );
}

export default SignUpComplete;
