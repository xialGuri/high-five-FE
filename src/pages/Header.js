import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../App.css";
import LogoImg from "../img/logo.png";

const Header = ({ isLogin }) => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  const isLogins = useState(false);
  const onLogout = () => {
    //로그아웃 처리하기
    navigate("/");
  };

  return (
    <>
      <Container>
        <LogoContainer>
          <HeaderLogoImage src={LogoImg} onClick={onClickLogo} />
        </LogoContainer>
        {/* {isLogin ? (
          <SmallButton onClick={onLogout}>마이페이지</SmallButton>
        ) : (
          "로그인"
        )} */}
      </Container>
      <Line />
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.2rem;
  width: 100vw;
  height: 5rem;
  background-color: #ffffff;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderLogoImage = styled.img`
  width: 168px;
  height: 66px;
  cursor: pointer;
`;

const HeaderLogo = styled.div`
  position: relative;
  display: inline-block;
  margin: 0.8rem;
  text-align: center;
  font-family: Montserrat-Bold;
  display: inline-block;
  font-size: 1.4rem;
  color: #6c63ff;
  cursor: pointer;
`;

const SmallButton = styled.button`
  border: none;
  border-radius: 50px;
  color: #ffffff;
  background: #6c63ff;
  height: 2rem;
  width: 5rem;
  font-family: Montserrat-Bold;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.5rem;
  margin-right: 5rem;
`;

const Line = styled.div`
  height: 0.08rem;
  width: 90vw;
  background-color: #e0e0e0;
  margin-left: 12rem;
`;

export default Header;
