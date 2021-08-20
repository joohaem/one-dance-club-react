import React from "react";
import arrowDown from "../images/qna/icon_arrow_down.gif";
import arrowUp from "../images/qna/icon_arrow_up.gif";
import "./QnA.css";

export default () => {
  const toggling = (e) => {
    const clicked = e.target.className === "question" ? e.target : e.target.parentElement;
    const arrowImg = clicked.lastElementChild;
    const toggled = clicked.nextElementSibling;
    if(toggled.classList.contains("open")) {
      toggled.classList.remove("open");
      arrowImg.style.backgroundImage = `url(${arrowDown})`;
    } else {
      toggled.classList.add("open");
      arrowImg.style.backgroundImage = `url(${arrowUp})`;
    }
  }

  return (
  <main className="main animationY_section">
    <h1 className="title_fnq"><span className="visually_hidden">FAQ</span></h1>
    <section className="qna">
        <div className="question" onClick={toggling}>
          <div className="icon icon_q"></div>
          <div className="content">저는 완전 몸치에요.. / 춤 한 번도 안 춰봤어요.. / 오디션 보나요?</div>
          <div className="icon show_more"></div>
        </div>
        <div className="answer">
          <div className="icon icon_a"></div>
          <div className="content">
            O.D.C 대부분의 사람들이 춤을 처음 접하고 배웁니다<br/>
            또한 주기수가 열심히 연습해서 신입기수를 잘 이끌어주는 시스템입니다<br/>
            오디션까지도 보지 않으니 아무 걱정 말고 지원해주세요 ~~<br/>
            O.D.C는 나이, 학년 제한 없이 춤을 좋아하는 모든 동국대생을 환영합니다!
          </div>
        </div>
    </section>

    <section className="qna">
      <div className="question" onClick={toggling}>
        <div className="icon icon_q"></div>
        <div className="content">일주일 2회(화, 금) 정기연습은 필참인가요?</div>
        <div className="icon show_more"></div>
      </div>
      <div className="answer">
        <div className="icon icon_a"></div>
        <div className="content">
          화금 6-9시 정규연습시간은 동아리의 규칙이며, 개인 사정으로 매주 일정한 시간 연습에 참가하지 못하면 공연동아리 특성상 동아리 전체 활동에 어려움이 있기 때문에 꼭 시간을 비워주셔야 해요 ㅠㅡㅠ<br/>
          1학기에 아쉽게도 시간이 맞지 않는다면, 2학기 시간표를 짤 때 시간을 고려함으로써 저희와 함께 할 수 있다면 너무 감사할 것 같습니다❤
        </div>
      </div>
    </section>

    <section className="qna">
      <div className="question" onClick={toggling}>
        <div className="icon icon_q"></div>
        <div className="content">COVID-19으로 N인 이상 집합금지인데 연습하나요?</div>
        <div className="icon show_more"></div>
      </div>
      <div className="answer">
        <div className="icon icon_a"></div>
        <div className="content">
          현재 실내체육시설 인원제한과 그 외 안전수칙을 준수하며 정기연습을 각 장르 팀장님들에 의한 교습의 형태로 진행하고 있습니다 !!<br/>
        </div>
      </div>
    </section>

    <section className="qna">
      <div className="question" onClick={toggling}>
        <div className="icon icon_q"></div>
        <div className="content">COVID-19인데 활동을 하나요?</div>
        <div className="icon show_more"></div>
      </div>
      <div className="answer">
        <div className="icon icon_a"></div>
        <div className="content">
          공연동아리인 만큼 화금 정기연습을 필수적으로 진행하고 있습니다<br/>
          또한 오프라인 행사를 촬영으로 대체하거나, 방역관리를 철저히 하며 진행하는 등 올해 활동이 부원분들께 무의미해지지 않도록 최선을 다하고 있습니다!<br/>
          다른 비대면 컨텐츠를 계속 기회하며 수도권/전국 스트릿댄스 연합(UNION, UDC 등)에서 기획하는 행사에도 참여합니다<br/>
          물론, 방역수칙을 지키며 안전을 최우선으로 활동할 것을 말씀드리고 싶어요!
        </div>
      </div>
    </section>

    <section className="qna">
      <div className="question" onClick={toggling}>
        <div className="icon icon_q"></div>
        <div className="content">지원을 했는데 연락이 안 와요..</div>
        <div className="icon show_more"></div>
      </div>
      <div className="answer">
        <div className="icon icon_a"></div>
        <div className="content">
          모집기간이 끝나고, 한 날에 지원해주신 분들을 모두 단체 톡방에 초대해드리니 조금만 기다려주세요!
        </div>
      </div>
    </section>

    <section className="qna">
      <div className="question" onClick={toggling}>
        <div className="icon icon_q"></div>
        <div className="content">지망 장르 나중에 변경 가능한가요? / 장르가 고민이에요..</div>
        <div className="icon show_more"></div>
      </div>
      <div className="answer">
        <div className="icon icon_a"></div>
        <div className="content">
          지원할 때 선택하는 장르는 수요 조사 단계이며, 모집 종료 후 경험해보는 행사를 진행하고, 장르를 선택할 수 있는 일정이 따로 있습니다!<br/>
          보통의 경우, 장르 변경은 다양한 장르의 체험을 위해 한 학기마다 기회가 있으니 부담 없이 선택해주세요 !!
        </div>
      </div>
    </section>

    <section className="qna">
      <div className="question" onClick={toggling}>
        <div className="icon icon_q"></div>
        <div className="content">2학기에 추가모집을 하나요?</div>
        <div className="icon show_more"></div>
      </div>
      <div className="answer">
        <div className="icon icon_a"></div>
        <div className="content">1학기와 달리 장르별 TO가 차이 날 수는 있지만 상황에 맞게 모집할 것입니다 !!</div>
      </div>
    </section>

    <section className="qna">
      <div className="question" onClick={toggling}>
        <div className="icon icon_q"></div>
        <div className="content">회비는 얼마인가요?</div>
        <div className="icon show_more"></div>
      </div>
      <div className="answer">
        <div className="icon icon_a"></div>
        <div className="content">동아리 내부사항이므로 임원진에게 개인적으로 연락주시면 감사하겠습니다!</div>
      </div>
    </section>

    <section className="qna">
      <div className="question" onClick={toggling}>
        <div className="icon icon_q"></div>
        <div className="content">아무래도 내향적인 성격때문에 지원하기가 무서워요..</div>
        <div className="icon show_more"></div>
      </div>
      <div className="answer">
        <div className="icon icon_a"></div>
        <div className="content">
          O.D.C는 제한이 없습니다!<br/>
          모든 부원분들의 나이, 성별, 학과, 실력, MBTI 모두 다양합니다<br/>
          오히려 COVID-19로 인해 대부분의 분들이 대학 내 친한 학우가 없을 때 O.D.C가 여러분의 정답이 되어드릴 수 있습니다 !!!!!<br/>
          회장을 포함한 여러 주기수 또한 여러 사람들을 모두 O.D.C에서 처음 만나 친해지며 대학 생활을 보내고 있습니다<br/>
          함께 춤이라는 관심사 아래 성실히 활동하면, 어느새 O.D.C는 여러분의 일상에 가까이 다가올 것입니다☺☺
        </div>
      </div>
    </section>
  </main>
  );
};