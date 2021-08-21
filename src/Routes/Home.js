import React from "react";
import imgLogo from "../images/odc_logo4.jpg";
import imgMT from "../images/home/mt.jpg";
import imgInCollege from "../images/home/inCollege.jpg";
import imgOutCollege from "../images/home/outCollege.jpg";
import imgPractice from "../images/home/practice.jpg";
import "./Home.css";

export default () => {

  return (
    <main className="main" id="index">
      <section className="odc_description animationY_section">
        <h1 className="visually_hidden">O.D.C</h1>
        <img className="odc_description_img" src={ imgLogo } alt="오디씨 로고" />
        <p className="odc_description_text">
          Street Dance (B-boy, Choreography, Girl's Hiphop, Hiphop, House, Krump, Locking, Poppin, Waacking) 를 중심으로 하며
          연습 및 이론학습으로 올바른 Street Dance 문화를 배우고 전파하는 데 목적을 둔다.
          동국대학교 내부 축제 공연 및 행사 공연, 외부 대학교 축제 및
          정기 공연 때 찬조공연, 플래시몹 그리고 외부 대학 댄스 동아리들과 연합공연을 기획하여
          대외적으로 동아리 이름을 알리고
          동아리원들이 춤 문화를 건전하게 받아들이고 즐겁고 색다른 학교 활동이 되도록 한다.
        </p>
    
      </section>

      <section className="what_wedo animationY_section">
        <h1 className="visually_hidden">what we do?</h1>

        <article className="what_wedo_imgs">
          <img className="what_wedo_img" src={ imgPractice } />
          <p className="what_wedo_content">매주 정기연습</p>
        </article>
      
        <article className="what_wedo_imgs">
          <img className="what_wedo_img" src={ imgInCollege } />
          <p className="what_wedo_content">다양한 교내 축제활동</p>
        </article>

        <article className="what_wedo_imgs">
          <img className="what_wedo_img" src={ imgMT } />
          <p className="what_wedo_content">동아리 내 친목활동</p>
        </article>

        <article className="what_wedo_imgs">
          <img className="what_wedo_img" src={ imgOutCollege } />
          <p className="what_wedo_content">교외 외부활동</p>
        </article>
      </section>

      <section className="odc_video animationY_section">
        <h1 className="visually_hidden">odc 홍보 영상</h1>        
        <iframe className="odc_video_iframe" src="https://www.youtube.com/embed/uwhTCpgw4yg" title="오디씨 유투브 영상" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </section>
    </main>
  );
};