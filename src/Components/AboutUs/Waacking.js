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
      <Image src="image/aboutus/waacking.jpg" alt="사진" />
      <Explain>
        <h1>왁킹</h1>
        <H3>기본동작은 주로 팔을 돌리는 동작인 트월(Twirl)과 팔을 뻗는 동작인 익스텐션(Extension), 모델처럼 인상적인 포즈를 취하는 포징(Posing)과 약간의 스텝(Step)으로 구성되며, 춤을 추는 태도(Attitude)가 일반적으로 중시되는 춤입니다. 특히 왁킹에서 중시되는 것은 그 태도로, 왁킹은 모티브가 당시 영화와 드랙퀸 쇼에서 나왔기 때문에 음악의 무드를 느끼며 섹슈얼하고 연기적인 부분이 강조됩니다.</H3> 
        <YoutubeLink href="https://youtu.be/tCDqCnOqOas" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};