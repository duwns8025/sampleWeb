import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';
import DropdownContent from './DropdownContent';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ className = '', showHeaderItems }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [visibleMenu, setVisibleMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedMenu) {
      setVisibleMenu(selectedMenu); // 즉시 보임
    } else {
      const timer = setTimeout(() => setVisibleMenu(null), 300); // 애니메이션 대기 후 제거
      return () => clearTimeout(timer); // cleanup
    }
  }, [selectedMenu]);

  const menus = ['about', 'brands', 'culture', 'commitments', 'investors', 'careers', 'news'];
  const displayNames = {
    about: 'ABOUT US',
    brands: 'BRANDS',
    culture: 'OUR CULTURE',
    commitments: 'COMMITMENTS',
    investors: 'INVESTORS',
    careers: 'CAREERS',
    news: 'NEWS',
  };

  return (
    <div className={`nav-wrapper ${className}`} onMouseLeave={() => setSelectedMenu(null)}>
      <nav className="nav">
        <div className={`nav-flex ${showHeaderItems ? 'compact' : ''}`}>
          {showHeaderItems && (
            <div className="nav-logo" onClick={() => navigate('/')}></div>
          )}

          <ul className="nav-list">
            {menus.map((menu) => (
              <li
                key={menu}
                className={`nav-item ${selectedMenu === menu ? 'selected' : ''}`}
                onMouseEnter={() => setSelectedMenu(menu)}
              >
                {displayNames[menu]}
              </li>
            ))}
          </ul>

          {showHeaderItems && (
            <div className="nav-auth">
              <a onClick={() => navigate('/login')}>로그인</a> |{' '}
              <a onClick={() => navigate('/signup')}>회원가입</a>
            </div>
          )}
        </div>
      </nav>
      {visibleMenu && (
        <DropdownContent
          selectedMenu={visibleMenu}
          isVisible={selectedMenu !== null}
          setSelectedMenu={setSelectedMenu} // ✅ 전달
        />
      )}
    </div>
  );
};

export default Navigation;
