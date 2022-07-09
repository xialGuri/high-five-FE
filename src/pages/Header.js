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
    navigate("/cal");
  };

  return (
    <>
      <Container>
        <LogoContainer>
          <HeaderLogoImage src={LogoImg} onClick={onClickLogo} />
        </LogoContainer>
        {isLogins ? (
          <SmallButton onClick={onLogout}>로그인</SmallButton>
        ) : (
          "로그아웃"
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 5em;

  overflow: hidden;
`;

const LogoContainer = styled.div`
  margin-left: 2em;
`;

const HeaderLogoImage = styled.img`
  width: 160px;
  height: 60px;
  cursor: pointer;
`;

const SmallButton = styled.div`
  font-family: GmarketSans-Medium;
  font-size: 1.06rem;
  padding: 0.5rem;
  margin-right: 5rem;
  cursor: pointer;
`;
export default Header;
