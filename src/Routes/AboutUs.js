import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";
import BboyComponent from "../Components/AboutUs/Bboy";
import ChoreoComponent from "../Components/AboutUs/Choreo";
import GirlhipComponent from "../Components/AboutUs/Girlhip";
import HiphopComponent from "../Components/AboutUs/Hiphop";
import HouseComponent from "../Components/AboutUs/House";
import KrumpComponent from "../Components/AboutUs/Krump";
import LockingComponent from "../Components/AboutUs/Locking";
import PoppinComponent from "../Components/AboutUs/Poppin";
import WaackingComponent from "../Components/AboutUs/Waacking";

const Section = styled.section`
  width: 1000px;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  color: black;
`;

const Item = styled.li`
  border: none;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 20px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: ${props => (props.active ? "white" : "inherit")};
  background-color: ${props => (props.active ? "black" : "inherit")};
  &:hover {
    color: white;
    background-color: black;
  }
`;


export default ({ location: { pathname } }) => {
  
  return (
  <>
    <Helmet>
      <title>About Us | O.D.C</title>
    </Helmet>
    <main className="main">
      <Section className="animationY_section">
          <h1 className="visually_hidden">장르 설명</h1>
          <List>
            <Item active={pathname === "/aboutus/bboy"} className="animationY_section">
              <Link to="/aboutus/bboy">B-boy</Link>
            </Item>
            <Item active={pathname === "/aboutus/choreo"} className="animationY_section">
              <Link to="/aboutus/choreo">Choreography</Link>
            </Item>
            <Item active={pathname === "/aboutus/girlhip"} className="animationY_section">
              <Link to="/aboutus/girlhip">Girl's Hiphop</Link>
            </Item>
            <Item active={pathname === "/aboutus/hiphop"} className="animationY_section">
              <Link to="/aboutus/hiphop">Hiphop</Link>
            </Item>
            <Item active={pathname === "/aboutus/house"} className="animationY_section">
              <Link to="/aboutus/house">House</Link>
            </Item>
            <Item active={pathname === "/aboutus/krump"} className="animationY_section">
              <Link to="/aboutus/krump">Krump</Link>
            </Item>
            <Item active={pathname === "/aboutus/locking"} className="animationY_section">
              <Link to="/aboutus/locking">Locking</Link>
            </Item>
            <Item active={pathname === "/aboutus/poppin"} className="animationY_section">
              <Link to="/aboutus/poppin">Popping</Link>
            </Item>
            <Item active={pathname === "/aboutus/waacking"} className="animationY_section">
              <Link to="/aboutus/waacking">Waacking</Link>
            </Item>
          </List>
          
          <Route path="/aboutus/bboy" component={BboyComponent} />
          <Route path="/aboutus/choreo" component={ChoreoComponent} />
          <Route path="/aboutus/girlhip" component={GirlhipComponent} />
          <Route path="/aboutus/hiphop" component={HiphopComponent} />
          <Route path="/aboutus/house" component={HouseComponent} />
          <Route path="/aboutus/krump" component={KrumpComponent} />
          <Route path="/aboutus/locking" component={LockingComponent} />
          <Route path="/aboutus/poppin" component={PoppinComponent} />
          <Route path="/aboutus/waacking" component={WaackingComponent} />
        </Section>
    </main>
  </>
)};