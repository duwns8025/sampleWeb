import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';
import DropdownContent from './DropdownContent';

const Navigation = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [visibleMenu, setVisibleMenu] = useState(null);

  useEffect(() => {
    if (selectedMenu) {
      setVisibleMenu(selectedMenu); // 즉시 보임
    } else {
      const timer = setTimeout(() => setVisibleMenu(null), 300); // 애니메이션 대기 후 제거
      return () => clearTimeout(timer); // cleanup
    }
  }, [selectedMenu]);

  const menus = [
    'about', 'brands', 'culture', 'commitments', 'investors', 'careers', 'news',
  ];

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
    <div className="nav-wrapper" onMouseLeave={() => setSelectedMenu(null)}>
      <nav className="nav">
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
