import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
//import { Link as RouterLink } from 'react-router-dom';
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
//import FullButton from "../Buttons/FullButton";
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
   
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      
      <Wrapper className="flexCenter animate drgBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
      
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
          <LogoIcon />
            <h1 style={{ marginLeft: "15px",  color:"#0B093B" }} className="font20 extraBold">
              Let's go Travel
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Services
              </Link>
            </li>
            
            <li className="semiBold font15 pointer">
            <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
            </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
          <li className="semiBold font15 pointer">
              <a href="/login" to="/login" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Login
              {/*<RouterLink to="../login" className="btn">Login</RouterLink>*/}  
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <span>   </span>
              <a href="/Signup" className="radius8 l  lightBg" style={{ padding: "10px 15px" }}>
                signup
              {/*<RouterLink to="../signup" className="btn">Sign Up</RouterLink>*/}
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
      
    </>
    
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
margin-left:20px;
display: flex;  
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


