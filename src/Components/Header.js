import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  
  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    height: 50px;
    justify-content: space-between;
  }
`;
  
const LLink = styled(Link)`
  display: block;
  width: 70px;
  height: 70px;
  background-image: url("image/odc_logo.png");
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    width: 50px;
    height: 50px;
  }
`;

const BLinkBox = styled.div`
  display: none;
  
  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    display: flex;
  }
`;

const PBLink = styled(Link)`
  display: block;
  background-image: url("image/icon_arrow_prev.png");
  width: 32px;
  height: 32px;
`;

const NBLink = styled(Link)`
  display: block;
  background-image: url("image/icon_arrow_next.png");
  width: 32px;
  height: 32px;
`;

const MenuList = styled.ul`
  display: flex;
  
  @media screen and (max-width: 768px),
  screen and (max-height: 768px) and (orientation: landscape) {
    display: none;
  }
`;

const MenuItem = styled.li`
  padding: 0 20px;
`;
  
const MLink = styled(Link)`
  display: block;
  border-bottom: 3px solid 
    ${props => (props.current ? "#ff1744" : "transparent")};
  font-weight: ${props => (props.current ? "600" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  &:hover {
    font-weight: 600;
  }
`;

const LinkBox = styled.div`
  display: flex;
`;

const LinkIst = styled.a`
  display: block;
  width: 26px;
  height: 26px;
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("image/instagram_logo.png");
  border-radius: 5px;
  &:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const LinkFb = styled.a`
  display: block;
  width: 26px;
  height: 26px;
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("image/facebook_logo.png");
  &:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const LinkYt = styled.a`
  display: block;
  width: 26px;
  height: 26px;
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("image/youtube_logo.png");
  &:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const HeaderComponent = ({ location : { pathname } }) => {
  let prevPage = "";
  let nextPage = "";
  if(pathname === "/") {
    prevPage = "/contact";
    nextPage = "/aboutus/bboy"
  } else if(pathname.includes("/aboutus")) {
    prevPage = "/";
    nextPage = "/portfolio"
  } else if(pathname === "/portfolio") {
    prevPage = "/aboutus/bboy";
    nextPage = "qna"
  } else if(pathname==="/qna") {
    prevPage = "/portfolio";
    nextPage = "contact"
  } else if(pathname === "/contact") {
    prevPage = "/qna";
    nextPage = "/"
  }

  return (
  <Header>
    <LLink to="/">
      <span className="visually_hidden">ODC 로고</span>
    </LLink>
    <BLinkBox>
      <PBLink to={ prevPage }><span className="visually_hidden">전 페이지</span></PBLink>
      <NBLink to={ nextPage }><span className="visually_hidden">다음 페이지</span></NBLink>
    </BLinkBox>  
    <MenuList>
      <MenuItem>
        <MLink current={pathname==="/"} to="/">
          Home
        </MLink>
      </MenuItem>
      <MenuItem>
        <MLink current={pathname.includes("/aboutus")} to="/aboutus/bboy">
          About Us
        </MLink>
      </MenuItem>
      <MenuItem>
        <MLink current={pathname==="/portfolio"} to="/portfolio">
          Portfolio
        </MLink>
      </MenuItem>
      <MenuItem>
        <MLink current={pathname==="/qna"} to="/qna">
          Q & A
        </MLink>
      </MenuItem>
      <MenuItem>
        <MLink current={pathname==="/contact"} to="/contact">
          Contact
        </MLink>
      </MenuItem>
    </MenuList>
    <LinkBox>
      <LinkIst href="https://www.instagram.com/odc_streetdance/" target="_blank">
        <span className="visually_hidden">인스타그램</span>
      </LinkIst>
      <LinkFb href="https://www.facebook.com/profile.php?id=100063589111633" target="_blank">
        <span className="visually_hidden">페이스북</span>
      </LinkFb>
      <LinkYt href="https://www.youtube.com/channel/UC02HqViXJ-uFmqg0K5gCygg" target="_blank">
        <span className="visually_hidden">유투브</span>
      </LinkYt>
    </LinkBox>
  </Header>
)};

export default withRouter(HeaderComponent);