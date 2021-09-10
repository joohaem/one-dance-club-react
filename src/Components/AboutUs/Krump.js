import React from "react";
import styled from "styled-components";

const Article = styled.article`
  margin: 100px;

  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    margin: 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 600px;
  height: 350px;
  margin: 70px auto;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    width: 100%;
    height: auto;
  }
`;

const Explain = styled.div`
  width: 70%;
  text-align: right;
  margin-left: auto;
  line-height: 200%;

  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    width: 100%;
    text-align: center;
    margin-left: 0;
  }
`;

const H3 = styled.h3`
  margin: 30px 0;
  word-break: keep-all;
`;

const YoutubeLink = styled.a`
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  &:hover {
    background-color: #eee;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  return (
    <Article className="animationY_section">
      <Image src="image/aboutus/krump.png" alt="사진" />
      <Explain>
        <h1>크럼프</h1>
        <H3>에너지를 가지고 노는 춤으로서 자유롭고 격렬하며 역동적인 움직임이 특징인 춤입니다. 가슴을 튕기는 체스트 팝(Chest Pop), 팔을 휘두르는 암 스윙(Arm Swing), 발을 구르는 스텀프(Stomp) 등의 기술로 이루어지며 그 외에 부가적인 요소로서 모자와 신발, 옷 등 도구를 이용하는 트릭을 선보이기도 합니다.</H3> 
        <YoutubeLink href="https://youtu.be/XbuyE2pSvN4" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};