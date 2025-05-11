import React, { useState, useEffect } from "react";
import "../../styles/MainNews.css";

const spaceDataList = [
  [
    { title: "본사", image: "/images/contents1.jpg", description: "협업과 소통의 공간" },
    { title: "미지움", image: "/images/contents2.jpg", description: "아모레퍼시픽의 예술 문화 공간" },
    { title: "제주 오설록", image: "/images/contents3.jpg", description: "자연과 조화를 이루는 녹차 박물관" },
    { title: "뷰티 파크", image: "/images/contents4.jpg", description: "체험형 뷰티 복합 공간" },
  ],
  [
    { title: "서울 오설록", image: "/images/contents5.jpg", description: "현대적 디자인의 녹차 체험 공간" },
    { title: "라운지 2025", image: "/images/contents6.jpg", description: "혁신적인 커피 및 뷰티 체험 공간" },
    { title: "뷰티 어드벤처", image: "/images/contents7.jpg", description: "미래의 뷰티 체험관" },
    { title: "아트랩", image: "/images/contents8.jpg", description: "예술과 과학의 만남" },
  ],
  [
    { title: "서울 오설록", image: "/images/contents9.jpg", description: "투명한 성분" },
    { title: "라운지 2025", image: "/images/contents10.jpg", description: "최상의 원료" },
    { title: "뷰티 어드벤처", image: "/images/contents11.jpg", description: "안전한 제품" },
    { title: "아트랩", image: "/images/contents12.jpg", description: "생산 품질" },
  ]
];

const pageDescriptions = [
  {
    title: "건축",
    content:
      "아모레퍼시픽은 공간을 통해 기업의 비전과 함께 사회를 향한 약속까지 담아냅니다. 아모레퍼시픽의 건축은 세상에 아름다움을 전하기 위해 노력하는 마음을 담은 공간이며, 이러한 가치가 직원들은 물론 함께하는 시민들에게도 전달되길 바랐습니다.",
  },
  {
    title: "지속가능경영",
    content:
      "아모레퍼시픽은 세상과의 깊은 공감을 바탕으로 더 나은 내일을 위해 2030 지속가능경영 약속 'A MORE Beautiful Promise'를 새롭게 고객과 약속했습니다.",
  },
  {
    title: "고객안심품질",
    content:
      "아모레퍼시픽은 제품의 기능적 품질을 넘어서 고객의 관점에서 고객을 만족시킬 수 있는 품질을 가장 중요하게 생각합니다.",
  },
];

const MainNews = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  // 3초마다 페이지 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % spaceDataList.length);
    }, 6000); // 3초마다 페이지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  return (
    <div className="main-slide">
      <div
        className="bg"
        style={{
          backgroundImage: "url('/images/MainNewBackGround.jpg')",
        }}
      ></div>

      <div className="l-wrap">
        <div className="l-wide">
          <h1 style={{ margin: "30px", textAlign: "center" }}>
            Story of Amorepacific
          </h1>

          <div className="thumb-list-wrapper">
            {spaceDataList.map((page, pageIndex) => (
              <ul
                key={pageIndex}
                className={`thumb-list ${currentPage === pageIndex ? "page-visible" : ""}`}
              >
                {page.map((space, index) => (
                  <li key={index} className="thumb">
                    <a href="#">
                      <div className="thumb-img">
                        <img src={space.image} alt={space.title} />
                      </div>
                      <div className="txt">
                        <h3 className="thumb-h">{space.title}</h3>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            ))}

            <div className="page-description">
              <em>{pageDescriptions[currentPage].title}</em>
              <p>{pageDescriptions[currentPage].content}</p>
            </div>
          </div>

          <div className="dot-nav">
            {spaceDataList.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentPage === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
