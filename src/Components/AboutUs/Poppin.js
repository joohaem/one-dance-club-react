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

export default () => {

  return (
    <Article className="animationY_section">
      <Image src="image/aboutus/poppin.jpg" alt="사진" />
      <Explain>
        <h1>팝핑</h1>
        <H3>1975년 미국 캘리포니아주 프레즈노 출신의 부갈루가 창안한 장르입니다. 몸 각 부위 근육에 빠르게 힘을 주었다가 이완시키는 팝(POP) 기술을 토대로 이루어지기 때문에 이러한 이름이 붙었습니다. 팝핀은 기본적으로 음악의 베이스, 또는 드럼과 같은 소리에 맞추어 몸이 터지는 듯한 느낌으로 음악을 표현합니다. 또한 팝핀이 다른 여러 가지 느낌의 스타일과 접목되어 발전함에 따라 박과 박 사이의 음, 또는 추가적인 음악 요소를 표현하는 방법도 크게 이용되고 있습니다.</H3> 
        <YoutubeLink href="https://youtu.be/5pbjQZrMrGQ" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};