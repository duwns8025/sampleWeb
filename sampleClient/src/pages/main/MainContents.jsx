import React from "react";
import "../../styles/Content.css";

const spaceData = [
  {
    title: "본사",
    image: "/images/contents1.jpg",
    description: "협업과 소통의 공간",
  },
  {
    title: "미지움",
    image: "/images/contents2.jpg",
    description: "아모레퍼시픽의 예술 문화 공간",
  },
  {
    title: "제주 오설록",
    image: "/images/contents3.jpg",
    description: "자연과 조화를 이루는 녹차 박물관",
  },
  {
    title: "뷰티 파크",
    image: "/images/contents4.jpg",
    description: "체험형 뷰티 복합 공간",
  },
];

const MainContents = () => {
  return (
    <div className="main-content-container">
      {spaceData.map((space, index) => (
        <div key={index} className="space-card">
          <img src={space.image} alt={space.title} />
          <div className="overlay">
            <div className="description">{space.description}</div>
          </div>
          <div className="space-title">{space.title}</div>
        </div>
      ))}
    </div>
  );
};

export default MainContents;
