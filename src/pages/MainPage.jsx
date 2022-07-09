import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link, useParam } from "react-router-dom";
import "../App.css";
import Header from "./Header.js";
import MainImg1 from "../img/MainImg1.png";
import MainImg2 from "../img/MainImg2.png";
import AddClothButton from "../img/AddClothButton.png";
import axios from "axios";

const MainPage = () => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <BodyContainer>
          <FirstFont>당신의 기분을</FirstFont>
          <SecondFont>날씨에 맞추지 마세요</SecondFont>
          <FirstImg src={MainImg1} />
          <SecondImg src={MainImg2} />
          <ThirdFontHighLight>Dreather</ThirdFontHighLight>
          <ThirdFont>가 당신의 옷에</ThirdFont>
          <FourthFont>날씨를 맞춥니다.</FourthFont>
          <RegisterButton src={AddClothButton}></RegisterButton>
        </BodyContainer>
        <FootContainer>
          <Line />
        </FootContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200em;
  background-color: #2c2c2c;
`;
const BodyContainer = styled.div`
  width: 100%;
  height: 75em;
  display: flex;
  justify-content: space-between;
`;
const FootContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Line = styled.div`
  height: 3px;
  width: 35.5em;
  background-color: white;
`;
const FirstFont = styled.div`
  position: absolute;
  font-family: GmarketSans-Bold;
  font-size: 60px;
  color: white;
  margin-top: 191px;
  margin-left: 68px;
`;
const SecondFont = styled.div`
  font-family: GmarketSans-Bold;
  font-size: 60px;
  color: white;
  margin-top: 267px;
  margin-left: 167px;
`;
const ThirdFontHighLight = styled.div`
  position: absolute;
  font-family: GmarketSans-Bold;
  font-size: 60px;
  font-color: #2c2c2c;
  background-color: white;
  margin-top: 755px;
  margin-left: 600px;
`;
const ThirdFont = styled.div`
  position: absolute;
  font-family: GmarketSans-Bold;
  font-size: 60px;
  color: white;
  margin-top: 755px;
  margin-left: 906px;
`;
const FourthFont = styled.div`
  font-family: GmarketSans-Bold;
  position: absolute;
  font-size: 60px;
  color: white;
  margin-top: 828px;
  margin-left: 858px;
`;
const FirstImg = styled.img`
  width: 31.88em;
  height: 36.94em;
  margin-top: 67px;
  margin-right: 30px;
`;
const SecondImg = styled.img`
  position: absolute;
  width: 31.88em;
  height: 42.88em;
  margin-top: 452px;
  margin-left: 30px;
`;

const RegisterButton = styled.img`
  position: absolute;
  width: 40.88em;
  height: 5.14em;
  margin-top: 967px;
  right: 55px;
  cursor: pointer;
`;

export default MainPage;
