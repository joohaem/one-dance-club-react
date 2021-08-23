import React from "react";
import styled from "styled-components";
import imgInclub1 from "../images/portfolio/img-inclub1.jpg";
import imgInclub2 from "../images/portfolio/img-inclub2.jpg";
import imgInclub3 from "../images/portfolio/img-inclub3.jpg";
import imgIncollege1 from "../images/portfolio/img-incollege1.jpg";
import imgIncollege2 from "../images/portfolio/img-incollege2.jpg";
import imgIncollege3 from "../images/portfolio/img-incollege3.jpg";
import imgOutcollege1 from "../images/portfolio/img-outcollege1.jpg";


const ActivityWrapper = styled.section`
  padding-bottom: 100px;
  `;
  
const Activity = styled.article`
display: grid;
  grid-template-columns: 500px 1fr;
  `;
  
const ImgBox = styled.figure`
position: relative;
  height: 40vh;
  `;

  const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  
  const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
  `;
  
  const Title = styled.h1`
  margin: 30px 0;
  `;
  
  const CareerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  `;
  
  const Title2 = styled.h2`
  margin: 30px 0;
`;

const CareerItem = styled.li`
font-size: 18px;
margin: 10px 0;
`;

export default () => {
  const inclubImgs = {
    1: imgInclub1,
    2: imgInclub2,
    3: imgInclub3
  }
  const incollegeImgs = {
    1: imgIncollege1,
    2: imgIncollege2,
    3: imgIncollege3
  }
  const outcollegeImgs = {
    1: imgOutcollege1
  }
  let inclubImgNum = 1;
  let incollegeImgNum = 1;
  let outcollegeImgNum = 1;
  
  const prevImg = (num, type, e) => {
    if(num > 1) {
      const ImgElement = e.target.parentElement.firstElementChild;
      if(type === 1) {
        inclubImgNum -= 1;
        ImgElement.src = inclubImgs[inclubImgNum];
      } else if(type === 2) {
        incollegeImgNum -= 1;
        ImgElement.src = incollegeImgs[incollegeImgNum];
      } else if(type === 3) {
        outcollegeImgNum -= 1;
        ImgElement.src = outcollegeImgs[outcollegeImgNum];
      }
    }
  };
  
  const nextImg = (num, type, e) => {
    const ImgElement = e.target.parentElement.firstElementChild;
    if(type === 1) {
      if(num < Object.keys(inclubImgs).length) {
        inclubImgNum += 1;
        ImgElement.src = inclubImgs[inclubImgNum];
      }
    } else if(type === 2) {
      if(num < Object.keys(incollegeImgs).length) {
        incollegeImgNum += 1;
        ImgElement.src = incollegeImgs[incollegeImgNum];
      }
    } else if(type === 3) {
      if(num < Object.keys(outcollegeImgs).length) {
        outcollegeImgNum += 1;
        ImgElement.src = outcollegeImgs[outcollegeImgNum];
      }
    }
    
  };
  
  // const loadImage = () => {};

  return (
    <main className="main">
      <ActivityWrapper>
        <Activity className="animationX_section">
          <ImgBox>
            <Img src={ imgInclub1 }/>
            <PrevBtn onClick={ (e) => prevImg(inclubImgNum, 1, e) }>«</PrevBtn>
            <NextBtn onClick={ (e) => nextImg(inclubImgNum, 1, e) }>»</NextBtn>
          </ImgBox>
          <ContentBox>
            <Title>동아리 내 활동</Title>
            <p>친목 도모를 위한 행사들을 진행합니다.</p>
          </ContentBox>
        </Activity>

        <Activity className="animationX_section">
          <ContentBox>
            <Title>교내 활동</Title>
            <p>교내 학생들을 대상으로 하는 공연들에 참여합니다.</p>
          </ContentBox>
          <ImgBox>
            <Img src={ imgIncollege1 } />
            <PrevBtn onClick={ (e) => prevImg(incollegeImgNum, 2, e) }>«</PrevBtn>
            <NextBtn onClick={ (e) => nextImg(incollegeImgNum, 2, e) }>»</NextBtn>
          </ImgBox>
        </Activity>

        <Activity className="animationX_section">
          <ImgBox>
            <Img src={ imgOutcollege1 } />
            <PrevBtn onClick={ (e) => prevImg(outcollegeImgNum, 3, e) }>«</PrevBtn>
            <NextBtn onClick={ (e) => nextImg(outcollegeImgNum, 3, e) }>»</NextBtn>
          </ImgBox>
          <ContentBox>
            <Title>교외 활동</Title>
            <p>타 학교와 춤으로 교류할 수 있는 기회들이 있습니다.</p>
          </ContentBox>
        </Activity>
      </ActivityWrapper>  

      <CareerWrapper>
        <Title>ODC 최근 연간 활동</Title>
        <Title2>2017</Title2>
        <ol>
          <CareerItem>2.26 동국대학교 공과대 새터 공연</CareerItem>
          <CareerItem>3.9 동국대학교 1학기 동아리박람회</CareerItem>
          <CareerItem>3.25 4호선 배틀 vol.1 참가</CareerItem>
          <CareerItem>5.25 동국대학교 1학기 대동제 공연</CareerItem>
          <CareerItem>5.28 THE UNION vol.13 YES24홀 공연</CareerItem>
          <CareerItem>8.13 WE STREET vol.2 버스킹 공연</CareerItem>
          <CareerItem>8.19 4호선 배틀 vol.2 참가</CareerItem>
          <CareerItem>9.7 동국대학교 2학기 동아리박람회</CareerItem>
          <CareerItem>9.21 동국대학교 2학기 대동제 공연</CareerItem>
          <CareerItem>9.23 동국대학교 홈커밍데이</CareerItem>
          <CareerItem>11.5 WE STREET vol.3 버스킹 공연</CareerItem>
          <CareerItem>11.26 THE UNION vol.14 YES24홀 공연</CareerItem>
          <CareerItem>12.1 O.D.C 15번째 정기공연</CareerItem>
        </ol>
        <Title2>2018</Title2>
        <ol>
          <CareerItem>2.28 동국대학교 공과대 새터 공연</CareerItem>
          <CareerItem>3.06 동국대학교 1학기 동아리박람회</CareerItem>
          <CareerItem>5.25 동국대학교 1학기 대동제 공연</CareerItem>
          <CareerItem>5.20 THE UNION vol.15 YES24홀 공연 </CareerItem>
          <CareerItem>8.20 상상 댄스윙 참가</CareerItem>
          <CareerItem>11.4 WE STREET vol.6 버스킹 공연</CareerItem>
          <CareerItem>11.18 THE UNION vol.16 YES24홀 공연</CareerItem>
          <CareerItem>11.30 O.D.C 16번째 정기공연</CareerItem>
        </ol>
        <Title2>2019</Title2>
        <ol>
          <CareerItem>2.22 동국대학교 입학식 찬조 공연</CareerItem>
          <CareerItem>2.27 동국대학교 공과대 새터 공연</CareerItem>
          <CareerItem>3.6 동아리박람회</CareerItem>
          <CareerItem>3.30 UNION 조작단 vol.8</CareerItem>
          <CareerItem>4.6 UDC 퍼포먼스 참가</CareerItem>
          <CareerItem>5.19 THE UNION vol.17 YES24홀 공연</CareerItem>
          <CareerItem>5.23 동국대학교 동국대학교 대동제 공연</CareerItem>
          <CareerItem>6.2 WE STREET vol.7 버스킹 공연</CareerItem>
          <CareerItem>8.8 한국외국어대학교 글로벌캠퍼스 찬조공연</CareerItem>
          <CareerItem>9.5 동국대학교 2학기 동아리박람회</CareerItem>
          <CareerItem>9.2 UNION 조작단 vol.9</CareerItem>
          <CareerItem>9.8 UNION 조작단 vol.10</CareerItem>
          <CareerItem>9.18 동국대학교 2학기 대동제 공연</CareerItem>
          <CareerItem>10.13 동방배틀 vol.24</CareerItem>
          <CareerItem>11.17 The UNION vol.18 YES24홀 공연</CareerItem>
          <CareerItem>11.29 O.D.C 17번째 정기공연</CareerItem>
          <CareerItem>11.3 WE STREET vol.8 버스킹 공연</CareerItem>
        </ol>
        <Title2>2020</Title2>
        <ol>
          <CareerItem>6.7 The UNION 참가</CareerItem>
          <CareerItem>10.31 제 4회 청년의날 플래시몹</CareerItem>
          <CareerItem>11.27 O.D.C 18번째 정기공연</CareerItem>
        </ol>
        <Title2>2021</Title2>
        <ol>
          <CareerItem>7.28 FLOWMAKER 대무전 참가</CareerItem>
          <CareerItem>7.31 O.D.C 청출어람 프로젝트 영상 촬영</CareerItem>
          <CareerItem>11.27 O.D.C 19번째 정기공연</CareerItem>
        </ol>
        ...
      </CareerWrapper>
    </main>
)};