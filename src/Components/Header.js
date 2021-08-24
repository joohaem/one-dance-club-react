import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import ImgLogo from "../images/odc_logo.png";
import ImgIst from "../images/instagram_logo.png";
import ImgFb from "../images/facebook_logo.png";
import ImgYt from "../images/youtube_logo.png";

const Header = styled.header`
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const LLink = styled(Link)`
  display: block;
  width: 70px;
  height: 70px;
  background-image: url(${ImgLogo});
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
`;

const MenuList = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  padding: 0 20px;
`;
  
  const MLink = styled(Link)`
  display: block;
  border-bottom: 3px solid 
  ${props => (props.current ? "#ff1744" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  &:hover {
    font-weight: 600;
  }
`;

const LinkList = styled.div`
  display: flex;
`;

const LinkIst = styled.a`
  display: block;
  width: 26px;
  height: 26px;
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${ImgIst});
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
  background-image: url(${ImgFb});
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
  background-image: url(${ImgYt});
  &:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const HeaderComponent = ({ location : { pathname } }) => (
  <Header>
    <LLink to="/">
      <span className="visually_hidden">ODC 로고</span>
    </LLink>
    {/* 모바일 메뉴 햄버거 버튼
    <Link to="" className="link_menu"><span clvisually_hiddenass="visually_hidden">메뉴 로고</span></Link> */}
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
    <LinkList>
      <LinkIst href="https://www.instagram.com/odc_streetdance/" target="_blank">
        <span className="visually_hidden">인스타그램</span>
      </LinkIst>
      <LinkFb href="https://www.facebook.com/profile.php?id=100063589111633" target="_blank">
        <span className="visually_hidden">페이스북</span>
      </LinkFb>
      <LinkYt href="https://www.youtube.com/channel/UC02HqViXJ-uFmqg0K5gCygg" target="_blank">
        <span className="visually_hidden">유투브</span>
      </LinkYt>
    </LinkList>
  </Header>
);

export default withRouter(HeaderComponent);