import React from "react";
import styled from "styled-components";
import Picture from "../../images/aboutus/girlhip.jpg";

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
        <h1>걸스힙합</h1>
        <H3>여성스러운 이미지와 느낌을 살려 아름다움을 표현하며 섬세한 기술과 표현력을 중요시하고, 섹시함과 파워풀함이 함께 느껴지는 춤입니다.</H3> 
        <YoutubeLink href="https://www.youtube.com/watch?v=ZbDegGfmca0" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};