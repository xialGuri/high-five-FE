import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate, Link, useParam } from "react-router-dom";
import "../App.css";
import Header from "./Header.js";
import GoogleLoginImg from "../img/GoogleLogin.png";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const onClickSocialLogin = () => {
    navigate("/cal");
  };
  return (
    <>
      <Header />
      <Container>
        <LoginBox>
          <LoginText>로그인</LoginText>
          <GoogleLogin
            src={GoogleLoginImg}
            onClick={onClickSocialLogin}
          ></GoogleLogin>
        </LoginBox>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 45.5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c2c2c;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 586px;
  height: 330px;
  border-radius: 78px;
  box-shadow: 1px 1px 30px 5px white;
  background: white;
`;

const LoginText = styled.div`
  position: absolute;
  font-family: GmarketSans-Bold;
  font-size: 2.38em;
  margin-top: -200px;
`;

const GoogleLogin = styled.img`
  position: relative;
  width: 462px;
  height: 80px;
  margin-top: 60px;
  cursor: pointer;
`;
export default Login;
