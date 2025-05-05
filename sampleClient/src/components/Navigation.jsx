import React, { useState } from 'react';
import '../styles/Navigation.css';
import DropdownContent from './DropdownContent';

const Navigation = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menus = [
    'about',
    'brands',
    'culture',
    'commitments',
    'investors',
    'careers',
    'news',
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
    <div
      className="nav-wrapper"
      onMouseLeave={() => setSelectedMenu(null)}
    >
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
      {selectedMenu && <DropdownContent selectedMenu={selectedMenu} />}
    </div>
  );
};

export default Navigation;
