import React from "react";
import styled from "styled-components";
import imgWay1 from "../images/contact/img-way1.jpg";
import imgWay2 from "../images/contact/img-way2.jpg";
import imgJoin from "../images/contact/join_step.jpg";
import imgPresident from "../images/contact/president.jpg";
import imgVicePresident from "../images/contact/vice_president.jpg";
import imgTreasurer from "../images/contact/treasurer.jpg";
import imgIns from "../images/instagram_logo.png";

const WayWrapper = styled.section`
  margin: 100px 0;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

const WayBox = styled.article`
  display: flex;
  justify-content: space-evenly;
`;

const WayImgBox = styled.div`
  position: relative;
`;

const WayImg = styled.img`
  /* 3:4 */
  width: 480px;
  height: 560px;
`;

const PrevBtn = styled.button`
  position: absolute;
  bottom: 10%;
  left: 40%;
  border: none;
  color: #ff1744;
  opacity: 70%;
  background-color: inherit;
  font-size: 30px;
  line-height: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    color: white;
    border-radius: 50%;
    background-color: #ff1744;
    cursor: pointer;
  }
`;

const NextBtn = styled.button`
  position: absolute;
  bottom: 10%;
  left: 60%;
  border: none;
  color: #ff1744;
  opacity: 70%;
  background-color: inherit;
  font-size: 30px;
  line-height: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    color: white;
    border-radius: 50%;
    background-color: #ff1744;
    cursor: pointer;
  }
`;

const WayText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 300%;
`;

const JoinWrapper = styled.section`
  margin: 100px 0;
`;

const JoinImg = styled.img`
  display: block;
  width: 800px;
  height: auto;
  margin: 0 auto;
`;

const ExecutivesWrapper = styled.section`
  margin: 100px 0;
`;

const ExecutivesBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ExecutiveImg = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
`;

const ExecutiveName = styled.p`
  margin: 20px 0 10px;
`;

const ExecutiveNum = styled.p`
  margin-bottom: 10px;
`;

const ILink = styled.a`
  display: inline-block;
  transition: all 0.3s;
  &:hover {
    background-color: #eee;
  }
`;

const ImgIst = styled.img`
  width: 14px;
  vertical-align: top;
  margin-right: 5px;
`;


export default () => {
  const wayImgs = {
    1: imgWay1,
    2: imgWay2
  }
  let imgNum = 1;
  
  const prevImg = (num, e) => {
    if(num > 1) {
      const ImgElement = e.target.parentElement.firstElementChild;
      imgNum -= 1;
      ImgElement.src = wayImgs[imgNum];
    }
  };
  
  const nextImg = (num, e) => {
    if(num < Object.keys(wayImgs).length) {
      const ImgElement = e.target.parentElement.firstElementChild;
      imgNum += 1;
      ImgElement.src = wayImgs[imgNum];
    }
  };

  // const loadImage = () => {};
  
  return (
  <main className="main">
    <WayWrapper className="animationY_section">
      <Title>동아리방 가는 길</Title>
      <WayBox>
        <WayImgBox>
          <WayImg src={ imgWay1 } alt="가는 길" />
          <PrevBtn onClick={ (e) => prevImg(imgNum, e) }>«</PrevBtn>
          <NextBtn onClick={ (e) => nextImg(imgNum, e) }>»</NextBtn>
        </WayImgBox>
        <WayText>
          1. 충무로역 1번 출구에서 나온 사진/ 쭉 직진<br />
          2. 우회전하는곳 사진 (그 두끼있는 건물에서)<br />
          3. 좌회전하는곳 사진 (빠바있는곳)<br />
          4. 후문 들어가는 사진/ 후문에서 우회전<br />
          5. 5층 맨끝 복도 odc 동방 사진<br />
        </WayText>
      </WayBox>
      
    </WayWrapper>
      

      <JoinWrapper className="animationY_section">
        <Title>가입 절차</Title>
        <article>
          <JoinImg src={ imgJoin } alt="가입절차 이미지" />
        </article>
      </JoinWrapper>
      

      <ExecutivesWrapper className="animationY_section">
        <Title>임원진</Title>
        <ExecutivesBox>
          <article>
            <ExecutiveImg src={ imgPresident } alt="회장" />
            <ExecutiveName>회장 최화인</ExecutiveName>
            <ExecutiveNum>010-7611-9475</ExecutiveNum>
            <ILink href="https://instagram.com/im_fine_tk/" target="_blank">
              <ImgIst src={ imgIns } className="executives_ist" alt="회장인스타" />
              im_fine_tk
            </ILink>
          </article>
          <article>
            <ExecutiveImg src={ imgVicePresident } alt="부회장" />
            <ExecutiveName>부회장 김민규</ExecutiveName>
            <ExecutiveNum>010-9330-1689</ExecutiveNum>
            <ILink href="https://instagram.com/00__ggyu/" target="_blank">
              <ImgIst src={ imgIns } className="executives_ist" alt="부회장인스타" />
              00_ggyu
            </ILink>
          </article>
          <article>
            <ExecutiveImg src={ imgTreasurer } alt="총무" />
            <ExecutiveName>총무 김현이</ExecutiveName>
            <ExecutiveNum>010-9699-2416</ExecutiveNum>
            <ILink href="https://instagram.com/illumin2us/" target="_blank">
              <ImgIst src={ imgIns } className="executives_ist" alt="총무인스타" />
              illumin2us
            </ILink>
          </article>
        </ExecutivesBox>
      </ExecutivesWrapper>
      
    </main>
)};