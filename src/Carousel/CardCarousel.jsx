import React, { useState } from "react";
import { CarouselProvider } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
    Card,
    ButtonContainer,
    SliderContainer,
    StyledSlide,
    StyledSlider,
    BackButton,
    NextButton,
    CardText,
    CardImage,
    CardButton,
    CardButtonBlue,
    SimpleDiv
} from "./styles";
import styled from "styled-components";

import sunnyImg from "../img/sunny.png"
import rainyImg from "../img/rainiy.png"
import cloudyImg from "../img/cloudy.png"
const CardCarousel = ({data}) => {


    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={data.length}
            visibleSlides={3}
            step={1}
        >
            <ButtonContainer>
                <BackButton>
                    <FiChevronLeft size="1.5em" />
                </BackButton>
                <NextButton>
                    <FiChevronRight size="1.5em" />
                </NextButton>
            </ButtonContainer>
            <SliderContainer>
                <StyledSlider classNameAnimation="animating">
                    {data.map((item, index) => (
                        <StyledSlide
                            index={index}
                            classNameHidden="hidden"
                            classNameVisible="visible"
                        >
                            <Card>
                                <CardText>
                                    <h2>{item.date}</h2>
                                    <h3>{item.weather}</h3>
                                    <SimpleDiv>
                                        <h4>최저기온 : {item.lowtemp} | </h4>
                                        <h4> 최고기온 : {item.hightemp}</h4>
                                    </SimpleDiv>
                                    {
                                        (function() {
                                            if (item.weather === "맑음") return (<div><img src={sunnyImg} style={{width:"120px"}}/></div>);
                                            if (item.weather === "흐림") return (<div><img src={cloudyImg} style={{width:"120px"}}/></div>);
                                            if (item.weather === "비옴") return (<div><img src={rainyImg} style={{width:"120px"}}/></div>);
                                        })()
                                    }
                                    <h4>오늘 내 코디 입기 {item.desfashion}!!</h4>
                                </CardText>
                                <CardButton />
                                <CardButtonBlue />
                            </Card>
                        </StyledSlide>
                    ))}
                </StyledSlider>
            </SliderContainer>
        </CarouselProvider>
    );
};

export default CardCarousel;