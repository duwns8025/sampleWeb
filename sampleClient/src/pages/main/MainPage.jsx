import React, { useEffect, useState } from "react";
import '../../styles/Content.css';
import MainBanner from './MainBanner';
import MainContents from './MainContents';

const images = [
  "/images/slide_img01.jpg",
  "/images/slide_img02.jpg",
  "/images/slide_img03.jpg",
];

const MainPage = () => {
    return (
        <div>
            <MainBanner />
            <MainContents/>
            
        </div>
    );
};

export default MainPage;
