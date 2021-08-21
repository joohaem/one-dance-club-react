import React from "react";
import styled from "styled-components";
import Picture from "../../images/aboutus/hiphop.jpg";

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
  line-height: 200%;
`;

const H3 = styled("h3")`
  margin: 30px 0;
  word-break: keep-all;
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
    <Article className="animationY_section">
      <Image src={ Picture } alt="사진" />
      <Explain>
        <h1>힙합</h1>
        <H3>1990년대 초부터 미국 청소년들 사이에서 유행한 자유스럽고 즉흥적인 춤입니다. 디스코댄스에 기반을 둔 춤으로서 일정한 음이 계속되는 힙합음악에 맞추어 춤을 춘 것이 힙합댄스의 시초이며, 올드 스쿨 힙합은 그루브와 박자를 큰 바운스로 타주는게 특징입니다.</H3> 
        <YoutubeLink href="https://youtu.be/F7YmE91ilc4" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};