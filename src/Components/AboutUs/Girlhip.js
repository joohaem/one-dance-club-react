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
      <Image src="image/aboutus/girlhip.png" alt="사진" />
      <Explain>
        <h1>걸스힙합</h1>
        <H3>여성스러운 이미지와 느낌을 살려 아름다움을 표현하며 섬세한 기술과 표현력을 중요시하고, 섹시함과 파워풀함이 함께 느껴지는 춤입니다.</H3> 
        <YoutubeLink href="https://www.youtube.com/watch?v=ZbDegGfmca0" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};