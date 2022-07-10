import React, {useState} from "react";
import "./styles";
import CardCarousel from "./CardCarousel";
import { CarouselContainer } from "./Carouselstyles";

export default function Slider({data}) {
    return (
        <CarouselContainer>
            <h1></h1>
                <CardCarousel
                   data={data}

                />
        </CarouselContainer>
    );
}