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
      <Image src="image/aboutus/locking.jpg" alt="사진" />
      <Explain>
        <h1>락킹</h1>
        <H3>클럽에서 춤을 추던 돈 캠벨이 동작을 삐끗하는 바람에 마치 자물쇠가 잠기듯(Lock) 몸이 툭하고 멈추었던 것이 주변 사람들에게 큰 호응을 이끌어낸 사건에서 유래한 춤입니다. 이후 돈 캠벨이 최초의 락킹 댄스팀인 더 락커즈(The Lockers)를 조직해 활동함으로써 세계적으로 유명해졌습니다. 다른 춤들과 구분되는 특징적인 요소는 바로 익살스러운 캐릭터(Character)이며, 대놓고 방정맞은 태도를 취하기도, 능청스러운 분위기를 연출하기도, 치기 어리고 귀여운 모습을 연출하기도 합니다.</H3> 
        <YoutubeLink href="https://youtu.be/EkgihFiKcME" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};