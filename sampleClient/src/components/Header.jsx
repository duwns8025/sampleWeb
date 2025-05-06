import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // 추가: 최상단 여부
  const [isHovered, setIsHovered] = useState(false); 

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
    setIsAtTop(scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header
      className={`header ${isAtTop && !isHovered ? 'transparent' : ''}`} // 👈 조건 수정
      onMouseEnter={() => setIsHovered(true)} // 👈 이벤트 핸들러 추가
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`header-wrapper ${isScrolled ? 'hide' : ''}`}>
        <div className="header-left">
          <div className="logo" onClick={handleLogoClick} />
        </div>
        <div className="header-center">사이트 이름</div>
        <div className="header-right">
          <div className="auth-links">
            <a onClick={() => navigate('/login')}>로그인</a> |{' '}
            <a onClick={() => navigate('/signup')}>회원가입</a>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
