import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/Header.css';

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-left"></div>
        <div className="header-center">사이트 이름</div> {/* 또는 로고, 검색창 등 */}
        <div className="header-right">
          <div className="auth-links">
            <a onClick={() => navigate('/login')}>로그인</a> | <a onClick={() => navigate('/signup')}>회원가입</a>
          </div>
        </div>
      </div>  
      <Navigation /> {/* 네비게이션 컴포넌트 */}
    </header>
  );
};

export default Header;
