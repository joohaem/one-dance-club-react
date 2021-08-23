import React from "react";
import styled from "styled-components";
import Picture from "../../images/aboutus/house.jpg";

const Article = styled.article`
  margin: 100px;
`;

const Image = styled.img`
  display: block;
  width: 600px;
  height: 350px;
  margin: 70px auto;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  object-fit: cover;
`;

const Explain = styled.div`
  width: 70%;
  text-align: right;
  margin-left: auto;
  line-height: 200%;
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
      <Image src={ Picture } alt="사진" />
      <Explain>
        <h1>하우스</h1>
        <H3>하우스 음악에 맞춰 추는 클럽용 댄스가 시초이며, 빠른 스텝과 그루브에서 나오는 풍부한 박자감, 음악의 특성상 빠른 진행을 보이는 템포, 변화무쌍하게 음악의 리듬을 풋워크으로 표현하는 춤입니다.</H3> 
        <YoutubeLink href="https://youtu.be/SubUAMdHuqA" target="_blank">장르 관련 영상 보기</YoutubeLink>
      </Explain>
    </Article>
  );
};