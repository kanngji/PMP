import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Nav">
        <a>연습 makes 완벽</a>
        <div className="list">
          <a onClick={() => navigate("/")}>홈</a>
          <a onClick={() => navigate("/list")}>사전과제</a>
          <a onClick={() => navigate("/developer")}>개발자에게</a>
          <a onClick={() => navigate("/login")}>관리자</a>
        </div>
      </div>
    </>
  );
}
