import '../App.css';
import "antd/dist/antd.min.css";
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Photo from '../Post/Photo';
import Header from '../Header/Header';
import Slider from '../Carousel/Slider';
import axios from "axios";
import React, {useEffect,useState} from "react";
import styled from "styled-components";
import {Dummydata} from "../Post/DataDummy"
import CardCarousel from "../Carousel/CardCarousel";

function ListviewScreen() {
    const [data,setData]=useState([]);
    useEffect(()=> {
        setData(Dummydata)

    })
    // useEffect(()=> {axios({
    //     method: "GET",
    //     url: "http://hana-umc.shop:8080/list",
    //     headers: {
    //         withCredentials: true,
    //         "Access-Control-Allow-Origin": "http://localhost:3000",
    //         'Accept': 'application/json',
    //     }
    // })
    //     .then((response) => (setDataresponse.data))
    // });
    const HeaderMainText=styled.h1`
        margin:30px;
        color: black;
        font-family: "GmarketSans-Bold";
        font-size:2rem;
        
    `
    return (
        <div className="app">
            <Header/>
                <Content className="app-container">
                    <HeaderMainText>언제 약속을 잡으면 좋을까?</HeaderMainText>
                    <div className="list-container">
                                    <Slider
                                        data={data}
                                    />
                                    <Photo/>
                    </div>
                </Content>
        </div>
    );
}

export default ListviewScreen;