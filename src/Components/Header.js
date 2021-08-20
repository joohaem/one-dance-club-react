import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SLink = styled(Link)`
  border-bottom: 3px solid 
    ${props => (props.current ? "#ff1744" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;
const HeaderComponent = ({ location : { pathname } }) => (
  <header className="header">
    <Link to="/" className="menu_logo"><span className="visually_hidden">ODC 로고</span></Link>
    {/* 모바일 메뉴 햄버거 버튼
    <Link to="" className="link_menu"><span clvisually_hiddenass="visually_hidden">메뉴 로고</span></Link> */}
    <ul className="menu_items">
      <li className="menu_item"><SLink current={pathname==="/"} to="/">Home</SLink></li>
      <li className="menu_item"><SLink current={pathname.includes("/aboutus")} to="/aboutus/bboy">About Us</SLink></li>
      <li className="menu_item"><SLink current={pathname==="/portfolio"} to="/portfolio">Portfolio</SLink></li>
      <li className="menu_item"><SLink current={pathname==="/qna"} to="/qna">Q & A</SLink></li>
      <li className="menu_item"><SLink current={pathname==="/contact"} to="/contact">Contact</SLink></li>
    </ul>
    <div className="menu_links">
      <a href="https://www.instagram.com/odc_streetdance/" target="_blank" className="menu_link link_ist"><span className="visually_hidden">인스타그램</span></a>
      <a href="https://www.facebook.com/profile.php?id=100063589111633" target="_blank" className="menu_link link_fb"><span className="visually_hidden">페이스북</span></a>
      <a href="https://www.youtube.com/channel/UC02HqViXJ-uFmqg0K5gCygg" target="_blank" className="menu_link link_yt"><span className="visually_hidden">유투브</span></a>
    </div>
  </header>
);

export default withRouter(HeaderComponent);