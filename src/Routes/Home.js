import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const DesciptionWrapper = styled.section`
  width: 100%;
  padding-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const DescriptionImg = styled.img`
  width: 250px;
  height: auto;
`;

const DescriptionText = styled.p`
  width: 400px;
  text-align: right;
  line-height: 200%;
  word-break: keep-all;
`;

const WedoWrapper = styled.section`
  width: 100%;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

const WedoImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const WedoText = styled.figcaption`
  margin-top: 20px;
  font-size: 18px;
`;

const Video = styled.iframe`
  display: block;
  margin: 0 auto;
  width: 854px;
  height: 480px; 
  /* 16:9 */
`;

export default () => {

  return (
    <>
      <Helmet>
        <title>O.D.C</title>
      </Helmet>
      <main className="main">
        <DesciptionWrapper className="animationY_section">
          <h1 className="visually_hidden">O.D.C</h1>
          <DescriptionImg src="image/odc_logo.png" alt="오디씨 로고" />
          <DescriptionText>
            Street Dance (B-boy, Choreography, Girl's Hiphop, Hiphop, House, Krump, Locking, Poppin, Waacking) 를 중심으로 하며
            연습 및 이론학습으로 올바른 Street Dance 문화를 배우고 전파하는 데 목적을 둔다.
            동국대학교 내부 축제 공연 및 행사 공연, 외부 대학교 축제 및
            정기 공연 때 찬조공연, 플래시몹 그리고 외부 대학 댄스 동아리들과 연합공연을 기획하여
            대외적으로 동아리 이름을 알리고
            동아리원들이 춤 문화를 건전하게 받아들이고 즐겁고 색다른 학교 활동이 되도록 한다.
          </DescriptionText>
        </DesciptionWrapper>

        <WedoWrapper className="animationY_section">
          <h1 className="visually_hidden">what we do?</h1>

          <figure>
            <WedoImg src="image/home/practice.jpg" />
            <WedoText>매주 정기연습</WedoText>
          </figure>
        
          <figure>
            <WedoImg src="image/home/inCollege.jpg" />
            <WedoText>다양한 교내 축제활동</WedoText>
          </figure>

          <figure>
            <WedoImg src="image/home/mt.jpg" />
            <WedoText>동아리 내 친목활동</WedoText>
          </figure>

          <figure>
            <WedoImg src="image/home/outCollege.jpg" />
            <WedoText>교외 외부활동</WedoText>
          </figure>
        </WedoWrapper>

        <section className="animationY_section">
          <h1 className="visually_hidden">odc 홍보 영상</h1>        
          <Video src="https://www.youtube.com/embed/uwhTCpgw4yg" title="오디씨 유투브 영상" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </section>
      </main>
    </>
  );
};