import React from "react";
import styled from "styled-components";
import Picture from "../../images/aboutus/choreo.jpg";

const Article = styled("article")`
  margin: 100px;
`;

const Image = styled("img")`
  display: block;
  width: 600px;
  height: 350px;
  margin: 70px auto;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Explain = styled("div")`
  width: 70%;
  text-align: right;
  margin-left: auto;
  line-height:200%
`;

const H3 = styled("h3")`
  margin: 30px 0;
  word-break: break-word;
`;

const YoutubeLink = styled("a")`
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  &:hover {
    background-color: #eee;
  }
`;

export default () => {

  return (
    <Article>
      <Image src={ Picture } alt="사진" />
      <Explain>
        <h1>코레오그래피</h1>
        <H3>음악의 다양한 소리, 질감, 리듬, 멜로디 등에 맞추어 노래에 가장 들어맞는 춤이 코레오이며, 누구든지 코레오그래퍼 안무가가 될 수 있습니다. 좋아하는 음악에 맞추어 자신의 스타일로 안무를 만들 수 있고, 주로 음악의 박자를 쪼개서 동작들을 넣는 것을 특징으로 음악의 가사나 비트에 맞추어서 동작을 하여 표현하는 춤입니다.</H3> 
        <YoutubeLink href="https://youtu.be/Evm2KlyBRRo" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};