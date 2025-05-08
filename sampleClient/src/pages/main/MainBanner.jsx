import React, { useEffect, useState } from "react";
import '../../styles/Content.css';

const images = [
  "/images/slide_img01.jpg",
  "/images/slide_img02.jpg",
  "/images/slide_img03.jpg",
];

const MainBanner = () => {
  const [current, setCurrent] = useState(0);

  // 자동 슬라이드 (3초마다)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  // 수동 전환 함수
  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      {/* 배경 이미지 슬라이드 */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* 텍스트 오버레이 */}
      <div className="text-overlay">
        <h1>People and values-oriented service</h1>
        <p>사람과 가치 중심의 서비스</p>
      </div>

      {/* 왼쪽 버튼 */}
      <button onClick={goToPrev} className="prev-btn" aria-label="Previous Slide">
        ‹
      </button>

      {/* 오른쪽 버튼 */}
      <button onClick={goToNext} className="next-btn" aria-label="Next Slide">
        ›
      </button>

      {/* 점(dot) 네비게이션 */}
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`dot ${current === index ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
