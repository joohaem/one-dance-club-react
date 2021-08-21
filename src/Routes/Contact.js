import React from "react";
import imgWay1 from "../images/contact/img-way1.jpg";
import imgJoin from "../images/contact/join_step.jpg";
import imgPresident from "../images/contact/president.jpg";
import imgVicePresident from "../images/contact/vice_president.jpg";
import imgTreasurer from "../images/contact/treasurer.jpg";
import imgIns from "../images/instagram_logo.png";
import "./Contact.css";

export default () => (
  <main className="main" id="contact">
      <section className="howtogo_section animationY_section">
        <h1 className="title">동아리방 가는 길</h1>
        <article className="howtogo_wrapper">
          <div className="howtogo">
            <img className="howtogo_img img-way" src={ imgWay1 } alt="가는 길" />
            <button className="howtogo_btn howtogo_btn1" onclick="prevImg('img-way')">«</button>
            <button className="howtogo_btn howtogo_btn2" onclick="nextImg('img-way')">»</button>
          </div>
          <div className="howtogo_explain">
            1. 충무로역 1번 출구에서 나온 사진/ 쭉 직진<br />
            2. 우회전하는곳 사진 (그 두끼있는 건물에서)<br />
            3. 좌회전하는곳 사진 (빠바있는곳)<br />
            4. 후문 들어가는 사진/ 후문에서 우회전<br />
            5. 5층 맨끝 복도 odc 동방 사진<br />
          </div>
        </article>
        
      </section>
      

      <section className="joinin_section animationY_section">
        <h1 className="title">가입 절차</h1>
        <article className="joinin">
          <img className="joinin_img" src={ imgJoin } alt="가입절차 이미지" />
        </article>
      </section>
      

      <section className="executives_section animationY_section">
        <h1 className="title">임원진</h1>
        <div className="executives_wrapper">
          <article>
            <img src={ imgPresident } className="executives_img" alt="회장" />
            <p className="executives_name">회장 최화인</p>
            <p className="executives_number">010-7611-9475</p>
            <a className="ist_link" href="https://instagram.com/im_fine_tk/" target="_blank">
              <img src={ imgIns } className="executives_ist" alt="회장인스타" />
              @im_fine_tk
            </a>
          </article>
          <article>
            <img src={ imgVicePresident } className="executives_img" alt="부회장" />
            <p className="executives_name">부회장 김민규</p>
            <p className="executives_number">010-9330-1689</p>
            <a className="ist_link" href="https://instagram.com/00__ggyu/" target="_blank">
              <img src={ imgIns } className="executives_ist" alt="부회장인스타" />
              @00_ggyu
            </a>
          </article>
          <article>
            <img src={ imgTreasurer } className="executives_img" alt="총무" />
            <p className="executives_name">총무 김현이</p>
            <p className="executives_number">010-9699-2416</p>
            <a className="ist_link" href="https://instagram.com/illumin2us/" target="_blank">
              <img src={ imgIns } className="executives_ist" alt="총무인스타" />
              @illumin2us
            </a>
          </article>
        </div>
      </section>
      
    </main>
);