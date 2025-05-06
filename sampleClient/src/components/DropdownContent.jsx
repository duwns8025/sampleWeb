import React from 'react';
import '../styles/Navigation.css';

const menuGroups = {
  about: ['Our Story', 'Our History', 'Our Values', 'Our Vision', 'Global Presence'],
  brands: ['설화수', '라네즈', '이니스프리', '헤라', '마몽드'],
  culture: ['Employee Stories', 'Work Environment', 'Employee Benefits', 'Career Development', 'Inclusion'],
  commitments: ['Environmental Impact', 'Social Responsibility', 'Sustainability', 'Governance', 'Ethical Sourcing'],
  investors: ['Annual Reports', 'Financials', 'Stock Info', 'Governance', 'FAQs'],
  careers: ['Jobs', 'Internships', 'Life at Company', 'Development', 'D&I'],
  news: ['Press Releases', 'Media Resources', 'Events', 'Announcements', 'Newsroom'],
};

const DropdownContent = ({ selectedMenu, isVisible, setSelectedMenu }) => {
  return (
    <div className={`dropdown ${isVisible ? 'show' : ''}`}>
      <div className="dropdown-inner">
        {Object.entries(menuGroups).map(([menuKey, items]) => (
          <div
            key={menuKey}
            className={`dropdown-column ${menuKey === selectedMenu ? 'highlight' : ''}`}
            onMouseEnter={() => setSelectedMenu(menuKey)} // ✅ 핵심
          >
            <h4>{menuKey.toUpperCase()}</h4>
            {items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownContent;
