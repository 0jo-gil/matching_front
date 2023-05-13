import { PageTitle } from "@styled/common";
import React from "react";
import { useNavigate } from "react-router-dom";

function SignUpComplete() {
  const navigate = useNavigate();
  return (
    <div>
      <PageTitle>회원가입 완료</PageTitle>

      <button onClick={() => navigate("/")}>메인으로</button>
      <button onClick={() => navigate("/auth/login")}>로그인</button>
    </div>
  );
}

export default SignUpComplete;
