import React from "react";
import styled from "styled-components";
// Components

import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/bg.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Signup');
  }

  return (
    <Wrapper id="home">
      <div className="whiteBg" style={{ padding: "50px 0" }}>
        <div className="container flexSpaceCenter">
          <LeftSide className="flexCenter">
            <div>
              <h1 style={{color:"#0B093B" }}className="extraBold font60">We are Digital Agency.</h1>
              <HeaderP className="font13 semiBold">
                We specialize in predicting travel costs using cutting-edge AI technology. 
                Our platform analyzes vast amounts of data, including historical prices, trends, 
                and market fluctuations, to provide accurate and reliable cost forecasts. This helps 
                travelers budget effectively and make informed decisions. Our team of AI experts and 
                data scientists continuously refine our models to ensure precision and adaptability. 
                Whether you're planning a vacation or a business trip, our AI-driven insights will guide 
                you to the best travel deals.
              </HeaderP>
              <BtnWrapper>
                <FullButton onClick={handleClick} title="Get Started" />
              </BtnWrapper>
            </div>
          </LeftSide>
          <RightSide>
            <ImageWrapper>
              <Img className="radius8" src={HeaderImage} alt="Travel" style={{ zIndex: 9 }} />    
            </ImageWrapper>
          </RightSide>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const LeftSide = styled.div`
  padding-bottom: 100px;
  width: 50%;
  height: 100%;
  margin-right: 10px;
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 1000px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  padding-bottom: 100px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 80%;
  @media (max-width: 1000px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
