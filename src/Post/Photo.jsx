import React from "react";
import { Link, useNavigate } from "react-router-dom";
import boyTalking from "../img/Group 2.png";
import styled from "styled-components";
import { Button } from "antd";

export default function Photo() {
  const navigate = useNavigate();
  const codyName = localStorage.getItem("cody");
  const PhotoContainer = styled.section`
    font-family: "GmarketSans-Bold";
  `;
  const BoyImage = styled.img`
    width: 1200px;
    height: 500px;
    margin-left: 100px;
    position: relative;
  `;
  const BoyText = styled.div`
    position: absolute;
    top: 770px;
    left: 620px;
    font-size: 2.7rem;
  `;
  const onClickCal = () => {
    navigate("/cal");
  };

  return (
    <PhotoContainer>
      <div className="photo-morahazi">
        <div className="photo-name"></div>
        <div>
          <BoyImage src={boyTalking} />
          <BoyText>
            너가 정한 데이트룩은 <br />
            7월 10일,11일이 적합하고 <br />
            가장 입기 좋은 날은 11일이야!
            <br />
            <Button
              style={{ borderRadius: "20px", height: "40px" }}
              onClick={{}}
            >
              {" "}
              달력 확인하러가기
            </Button>
          </BoyText>
        </div>
      </div>
    </PhotoContainer>
  );
}
