import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const WayWrapper = styled.section`
  margin: 100px 0;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

const WayBox = styled.article`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const WayImgBox = styled.div`
  position: relative;
`;

const WayImg = styled.img`
  /* 3:4 */
  width: 420px;
  height: 560px;

  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    /* 3:4 */
    width: 270px;
    height: 360px;
  }
`;

const PrevBtn = styled.button`
  position: absolute;
  top: calc(50% - 1.5rem);
  left: 0%;
  border: none;
  width: 3rem;
  height: 3rem;
  /* Flex rules 'em all */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff1744;
  opacity: 70%;
  background-color: inherit;
  font-size: 30px;
  &:hover {
    color: white;
    background-color: #ff1744;
    cursor: pointer;
  }
`;

const NextBtn = styled.button`
  position: absolute;
  top: calc(50% - 1.5rem);
  right: 0%;
  border: none;
  width: 3rem;
  height: 3rem;
  /* Flex rules 'em all */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff1744;
  opacity: 70%;
  background-color: inherit;
  font-size: 30px;
  &:hover {
  color: white;
  background-color: #ff1744;
  cursor: pointer;
  }
`;

const WayText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 300%;

  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    margin-top: 20px;
  }
`;

const JoinWrapper = styled.section`
  margin: 100px 0;
`;

const JoinImg = styled.img`
  display: block;
  width: 600px;
  height: auto;
  margin: 0 auto;

  
  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    width: 100%;
  }
`;

const ExecutivesWrapper = styled.section`
  margin: 100px 0;
`;

const ExecutivesBox = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    flex-direction: column;
    align-items: center;
  }
`;

const ExecutiveImg = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
  
  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    margin-top: 30px;
  }
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


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const wayImgs = {
    1: "image/contact/img-way1.png",
    2: "image/contact/img-way2.png",
    3: "image/contact/img-way3.png",
    4: "image/contact/img-way4.png",
    5: "image/contact/img-way5.png"
  }
  let imgNum = 1;
  
  const prevImg = (num, e) => {
    const ImgElement = e.target.parentElement.firstElementChild;
    if(num > 1) {
      imgNum -= 1;
    } else {
      imgNum = Object.keys(wayImgs).length;
    }
    ImgElement.src = wayImgs[imgNum];
  };
  
  const nextImg = (num, e) => {
    const ImgElement = e.target.parentElement.firstElementChild;
    if(num < Object.keys(wayImgs).length) {
      imgNum += 1;
    } else {
      imgNum = 1;
    }
    ImgElement.src = wayImgs[imgNum];
  };
  
  return (
    <>
      <Helmet>
        <title>Contact | O.D.C</title>
      </Helmet>
      <main className="main">
        <WayWrapper className="animationY_section">
          <Title>???????????? ?????? ???</Title>
          <WayBox>
            <WayImgBox>
              <WayImg src="image/contact/img-way1.png" alt="?????? ???" />
              <PrevBtn onClick={ (e) => prevImg(imgNum, e) }>??</PrevBtn>
              <NextBtn onClick={ (e) => nextImg(imgNum, e) }>??</NextBtn>
            </WayImgBox>
            <WayText>
              1. ???????????? 1??? ???????????? ?????? ??? ???????????????<br />
              2. ????????? ??? ???????????? ????????? ???????????? ??????????????????<br />
              3. ?????????????????? ????????? ??????????????? ??????????????????<br />
              4. ??????????????? ???????????? ?????? ???????????? ???????????????<br />
              5. ???????????? ?????? ????????? ???????????? 5?????? ??????????????? ????????????<br />
            </WayText>
          </WayBox>
          
        </WayWrapper>
          

          <JoinWrapper className="animationY_section">
            <Title>?????? ??????</Title>
            <article>
              <JoinImg src="image/contact/join_step.png" alt="???????????? ?????????" />
            </article>
          </JoinWrapper>
          

          <ExecutivesWrapper className="animationY_section">
            <Title>?????????</Title>
            <ExecutivesBox>
              <article>
                <ExecutiveImg src="image/contact/president.png" alt="??????" />
                <ExecutiveName>?????? ?????????</ExecutiveName>
                <ExecutiveNum>010-7611-9475</ExecutiveNum>
                <ILink href="https://instagram.com/im_fine_tk/" target="_blank">
                  <ImgIst src="image/instagram_logo.png" className="executives_ist" alt="???????????????" />
                  im_fine_tk
                </ILink>
              </article>
              <article>
                <ExecutiveImg src="image/contact/vice_president.png" alt="?????????" />
                <ExecutiveName>????????? ?????????</ExecutiveName>
                <ExecutiveNum>010-9330-1689</ExecutiveNum>
                <ILink href="https://instagram.com/00__ggyu/" target="_blank">
                  <ImgIst src="image/instagram_logo.png" className="executives_ist" alt="??????????????????" />
                  00_ggyu
                </ILink>
              </article>
              <article>
                <ExecutiveImg src="image/contact/treasurer.png" alt="??????" />
                <ExecutiveName>?????? ?????????</ExecutiveName>
                <ExecutiveNum>010-9699-2416</ExecutiveNum>
                <ILink href="https://instagram.com/illumin2us/" target="_blank">
                  <ImgIst src="image/instagram_logo.png" className="executives_ist" alt="???????????????" />
                  illumin2us
                </ILink>
              </article>
            </ExecutivesBox>
          </ExecutivesWrapper>
          
        </main>
      </>
)};