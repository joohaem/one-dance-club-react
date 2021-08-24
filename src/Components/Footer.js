import React from "react";
import styled from "styled-components";
import imgIns from "../images/instagram_logo.png";

const Footer = styled.footer`
  background-color: #eee;
  height: 14px;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
`;

const ILink = styled.a`
  display: inline-block;
  transition: all 1s;
  &:hover {
    background-color: #ddd;
  }
`;

const IImage = styled.img`
  display: inline-block;
  width: 14px;
  vertical-align: top;
  margin: 0 5px;
`;



export default () => (
  <Footer>
    <ILink href="https://instagram.com/joamjoam_2/" target="_blank">
      <IImage src={imgIns} className="footer_logo" alt="인스타그램" />
      joamjoam_2
    </ILink>
    <ILink href="https://www.instagram.com/ps_noback/" target="_blank">
      <IImage src={imgIns} className="footer_logo" alt="인스타그램" />
      ps_noback
    </ILink>  
  </Footer>
);