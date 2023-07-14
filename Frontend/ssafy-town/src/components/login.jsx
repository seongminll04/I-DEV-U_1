import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 백엔드 연결 되면 로그인 관련 기능 추가
    navigate('/game');
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <h3>백엔드 연결전까지 일단 바로 로그인</h3>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};
