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
      <Image src="image/aboutus/bboy.png" alt="사진" />
      <Explain>
        <h1>비보이</h1>
        <H3>70년대 초 브레이킹 비트가 사용되기 시작하면서 생긴 춤입니다. 스트리트 댄스 중 유일하게 플로어 중심의 무빙을 하며 스트리트 댄스 배틀 문화를 주도하는 장르입니다. 스타일 무브, 파워 무브, 프리즈 무브 등으로 동작이 나뉘며 화려함과 박력을 가지고 있는 춤입니다.</H3> 
        <YoutubeLink href="https://youtu.be/GziBBrac0K4" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};