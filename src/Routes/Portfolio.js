import React from "react";
import imgInclub from "../images/portfolio/img-inclub1.jpg";
import imgIncollege from "../images/portfolio/img-incollege1.jpg";
import imgOutcollege from "../images/portfolio/img-outcollege1.jpg";
import "../Components/Common.css";
import "./Portfolio.css";

export default () => (
  <main className="main port" id="portfolio">
      <section className="activity">
        <article className="about_activity animationX_section">
          <figure className="image_box">
            <img className="img-inclub" src={ imgInclub }/>
            <button className="activity_btn activity_btn1" onclick="prevImg('img-inclub')">«</button>
            <button className="activity_btn activity_btn2" onclick="nextImg('img-inclub')">»</button>
          </figure>
          <div className="content_box">
            <h1>동아리 내 활동</h1>
            <p>친목 도모를 위한 행사들을 진행합니다.</p>
          </div>
        </article>

        <article className="about_activity animationX_section">
          <div className="content_box">
            <h1>교내 활동</h1>
            <p>교내 학생들을 대상으로 하는 공연들에 참여합니다.</p>
          </div>
          <figure className="image_box">
            <img className="img-incollege" src={ imgIncollege } />
            <button className="activity_btn activity_btn1" onclick="prevImg('img-incollege')">«</button>
            <button className="activity_btn activity_btn2" onclick="nextImg('img-incollege')">»</button>
          </figure>
        </article>

        <article className="about_activity animationX_section">
          <figure className="image_box">
            <img className="img-outcollege" src={ imgOutcollege } />
            <button className="activity_btn activity_btn1" onclick="prevImg('img-outcollege')">«</button>
            <button className="activity_btn activity_btn2" onclick="nextImg('img-outcollege')">»</button>
          </figure>
          <div className="content_box">
            <h1>교외 활동</h1>
            <p>타 학교와 춤으로 교류할 수 있는 기회들이 있습니다.</p>
          </div>
        </article>
      </section>  

      <section className="career">
        <h1>ODC 최근 연간 활동</h1>
        <h2>2017</h2>
        <ol>
          <li>2.26 동국대학교 공과대 새터 공연</li>
          <li>3.9 동국대학교 1학기 동아리박람회</li>
          <li>3.25 4호선 배틀 vol.1 참가</li>
          <li>5.25 동국대학교 1학기 대동제 공연</li>
          <li>5.28 THE UNION vol.13 YES24홀 공연</li>
          <li>8.13 WE STREET vol.2 버스킹 공연</li>
          <li>8.19 4호선 배틀 vol.2 참가</li>
          <li>9.7 동국대학교 2학기 동아리박람회</li>
          <li>9.21 동국대학교 2학기 대동제 공연</li>
          <li>9.23 동국대학교 홈커밍데이</li>
          <li>11.5 WE STREET vol.3 버스킹 공연</li>
          <li>11.26 THE UNION vol.14 YES24홀 공연</li>
          <li>12.1 O.D.C 15번째 정기공연</li>
        </ol>
        <h2>2018</h2>
        <ol>
          <li>2.28 동국대학교 공과대 새터 공연</li>
          <li>3.06 동국대학교 1학기 동아리박람회</li>
          <li>5.25 동국대학교 1학기 대동제 공연</li>
          <li>5.20 THE UNION vol.15 YES24홀 공연 </li>
          <li>8.20 상상 댄스윙 참가</li>
          <li>11.4 WE STREET vol.6 버스킹 공연</li>
          <li>11.18 THE UNION vol.16 YES24홀 공연</li>
          <li>11.30 O.D.C 16번째 정기공연</li>
        </ol>
        <h2>2019</h2>
        <ol>
          <li>2.22 동국대학교 입학식 찬조 공연</li>
          <li>2.27 동국대학교 공과대 새터 공연</li>
          <li>3.6 동아리박람회</li>
          <li>3.30 UNION 조작단 vol.8</li>
          <li>4.6 UDC 퍼포먼스 참가</li>
          <li>5.19 THE UNION vol.17 YES24홀 공연</li>
          <li>5.23 동국대학교 동국대학교 대동제 공연</li>
          <li>6.2 WE STREET vol.7 버스킹 공연</li>
          <li>8.8 한국외국어대학교 글로벌캠퍼스 찬조공연</li>
          <li>9.5 동국대학교 2학기 동아리박람회</li>
          <li>9.2 UNION 조작단 vol.9</li>
          <li>9.8 UNION 조작단 vol.10</li>
          <li>9.18 동국대학교 2학기 대동제 공연</li>
          <li>10.13 동방배틀 vol.24</li>
          <li>11.17 The UNION vol.18 YES24홀 공연</li>
          <li>11.29 O.D.C 17번째 정기공연</li>
          <li>11.3 WE STREET vol.8 버스킹 공연</li>
        </ol>
        <h2>2020</h2>
        <ol>
          <li>6.7 The UNION 참가</li>
          <li>10.31 제 4회 청년의날 플래시몹</li>
          <li>11.27 O.D.C 18번째 정기공연</li>
        </ol>
        <h2>2021</h2>
        <ol>
          <li>7.28 FLOWMAKER 대무전 참가</li>
          <li>7.31 O.D.C 청출어람 프로젝트 영상 촬영</li>
          <li>11.27 O.D.C 18번째 정기공연</li>
        </ol>
        ...
      </section>
    </main>
);