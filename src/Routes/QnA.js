import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import arrowDown from "../images/qna/icon_arrow_down.gif";
import arrowUp from "../images/qna/icon_arrow_up.gif";
import imgQuestion from "../images/qna/icon_question.png";
import imgTitle from "../images/qna/title_faq.gif";
import imgLogo from "../images/odc_logo.png";

const Title = styled.h1`
  margin: 70px auto;
  width: 98px;
  height: 50px;
  background-image: url(${imgTitle});
`;

const QnA = styled.article`
  border-top: 1px #a1a5ad solid;
  &:last-child {
    border-bottom: 1px #a1a5ad solid;
  }
`;

const Q = styled.div`
  position: relative;
  line-height: 28px;
  padding: 30px 60px;
  font-size: 20px;
  color: #1b1d21;
`;
  
  const A = styled.div`
  position: relative;
  line-height: 28px;
  display: none;
  padding: 30px 60px;
  font-size: 16px;
  color: #60656e;
  background-color: #f7f8fa;
  &.openAnswer {
    display: block;
  }
`;
  
const IconQ = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: inline-block;
  width: 60px;
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 15px 30px;
  left: 0;
  background-image: url(${imgQuestion});
`;

const IconA = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: inline-block;
  width: 60px;
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: 15px 30px;
  left: 0;
  background-image: url(${imgLogo});
`;

const IconArrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: inline-block;
  width: 60px;
  background-repeat: no-repeat;
  right: 0;
  background-image: url(${arrowDown});
  background-position: 50% 38px;
  &:hover {
    cursor: pointer;
  }
`;

export default () => {
  const toggling = (e) => {
    const arrowImg = e.target;
    const clicked = e.target.parentElement;
    const toggled = clicked.nextElementSibling;
    if(toggled.classList.contains("openAnswer")) {
      toggled.classList.remove("openAnswer");
      arrowImg.style.backgroundImage = `url(${arrowDown})`;
    } else {
      toggled.classList.add("openAnswer");
      arrowImg.style.backgroundImage = `url(${arrowUp})`;
    }
  }

  return (
    <>
      <Helmet>
        <title>Q & A | O.D.C</title>
      </Helmet>
      <main className="main animationY_section">
        <Title>
          <span className="visually_hidden">FAQ</span>
        </Title>
        <QnA>
            <Q>
              <IconQ />
              <p>저는 완전 몸치에요.. / 춤 한 번도 안 춰봤어요.. / 오디션 보나요?</p>
              <IconArrow onClick={toggling} />
            </Q>
            <A>
              <IconA />
              <p>
                O.D.C 대부분의 사람들이 춤을 처음 접하고 배웁니다<br/>
                또한 주기수가 열심히 연습해서 신입기수를 잘 이끌어주는 시스템입니다<br/>
                오디션까지도 보지 않으니 아무 걱정 말고 지원해주세요 ~~<br/>
                O.D.C는 나이, 학년 제한 없이 춤을 좋아하는 모든 동국대생을 환영합니다!
              </p>
            </A>
        </QnA>

        <QnA>
          <Q>
            <IconQ />
            <p>일주일 2회(화, 금) 정기연습은 필참인가요?</p>
            <IconArrow onClick={toggling} />
          </Q>
          <A>
            <IconA />
            <p>
              화금 6-9시 정규연습시간은 동아리의 규칙이며, 개인 사정으로 매주 일정한 시간 연습에 참가하지 못하면 공연동아리 특성상 동아리 전체 활동에 어려움이 있기 때문에 꼭 시간을 비워주셔야 해요 ㅠㅡㅠ<br/>
              1학기에 아쉽게도 시간이 맞지 않는다면, 2학기 시간표를 짤 때 시간을 고려함으로써 저희와 함께 할 수 있다면 너무 감사할 것 같습니다❤
            </p>
          </A>
        </QnA>

        <QnA>
          <Q>
            <IconQ />
            <p>COVID-19으로 N인 이상 집합금지인데 연습하나요?</p>
            <IconArrow onClick={toggling} />
          </Q>
          <A>
            <IconA />
            <p>
              현재 실내체육시설 인원제한과 그 외 안전수칙을 준수하며 정기연습을 각 장르 팀장님들에 의한 교습의 형태로 진행하고 있습니다 !!<br/>
            </p>
          </A>
        </QnA>

        <QnA>
          <Q>
            <IconQ />
            <p>COVID-19인데 활동을 하나요?</p>
            <IconArrow onClick={toggling} />
          </Q>
          <A>
            <IconA />
            <p>
              공연동아리인 만큼 화금 정기연습을 필수적으로 진행하고 있습니다<br/>
              또한 오프라인 행사를 촬영으로 대체하거나, 방역관리를 철저히 하며 진행하는 등 올해 활동이 부원분들께 무의미해지지 않도록 최선을 다하고 있습니다!<br/>
              다른 비대면 컨텐츠를 계속 기회하며 수도권/전국 스트릿댄스 연합(UNION, UDC 등)에서 기획하는 행사에도 참여합니다<br/>
              물론, 방역수칙을 지키며 안전을 최우선으로 활동할 것을 말씀드리고 싶어요!
            </p>
          </A>
        </QnA>

        <QnA>
          <Q>
            <IconQ />
            <p>지원을 했는데 연락이 안 와요..</p>
            <IconArrow onClick={toggling} />
          </Q>
          <A>
            <IconA />
            <p>
              모집기간이 끝나고, 한 날에 지원해주신 분들을 모두 단체 톡방에 초대해드리니 조금만 기다려주세요!
            </p>
          </A>
        </QnA>

        <QnA>
          <Q>
            <IconQ />
            <p>지망 장르 나중에 변경 가능한가요? / 장르가 고민이에요..</p>
            <IconArrow onClick={toggling} />
          </Q>
          <A>
            <IconA />
            <p>
              지원할 때 선택하는 장르는 수요 조사 단계이며, 모집 종료 후 경험해보는 행사를 진행하고, 장르를 선택할 수 있는 일정이 따로 있습니다!<br/>
              보통의 경우, 장르 변경은 다양한 장르의 체험을 위해 한 학기마다 기회가 있으니 부담 없이 선택해주세요 !!
            </p>
          </A>
        </QnA>

        <QnA>
          <Q>
            <IconQ />
            <p>2학기에 추가모집을 하나요?</p>
            <IconArrow onClick={toggling} />
          </Q>
          <A>
            <IconA />
            <p>1학기와 달리 장르별 TO가 차이 날 수는 있지만 상황에 맞게 모집할 것입니다 !!</p>
          </A>
        </QnA>

        <QnA>
          <Q>
            <IconQ />
            <p>회비는 얼마인가요?</p>
            <IconArrow onClick={toggling} />
          </Q>
          <A>
            <IconA />
            <p>동아리 내부사항이므로 임원진에게 개인적으로 연락주시면 감사하겠습니다!</p>
          </A>
        </QnA>

        <QnA>
          <Q>
            <IconQ />
            <p>아무래도 내향적인 성격때문에 지원하기가 무서워요..</p>
            <IconArrow onClick={toggling} />
          </Q>
          <A>
            <IconA />
            <p>
              O.D.C는 제한이 없습니다!<br/>
              모든 부원분들의 나이, 성별, 학과, 실력, MBTI 모두 다양합니다<br/>
              오히려 COVID-19로 인해 대부분의 분들이 대학 내 친한 학우가 없을 때 O.D.C가 여러분의 정답이 되어드릴 수 있습니다 !!!!!<br/>
              회장을 포함한 여러 주기수 또한 여러 사람들을 모두 O.D.C에서 처음 만나 친해지며 대학 생활을 보내고 있습니다<br/>
              함께 춤이라는 관심사 아래 성실히 활동하면, 어느새 O.D.C는 여러분의 일상에 가까이 다가올 것입니다☺☺
            </p>
          </A>
        </QnA>
      </main>
    </>
  );
};