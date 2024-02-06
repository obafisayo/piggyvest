import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container/Container";
import TextCard from "../TextCard/TextCard";
import EnteredDiv from "../Entereddiv/EnteredDiv";
import { theme } from "../../globalStyles";

function PageInfo({title, children, color, config}) {
    const [myStyle, setMyStyle] = useState(false);
    const [myStyle1, setMyStyle1] = useState(false);
    const [myStyle2, setMyStyle2] = useState(false);
    const [myStyle3, setMyStyle3] = useState(false);
    const style1 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle1 || myStyle? "1" : "0",
        visibility: myStyle1 ? "visible" : "hidden"
    }
    const style2 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle2 ? "1" : "0",
        visibility: myStyle2 ? "visible" : "hidden"
    }
    const style3 = {
        transition: "all 0.5s ease-in",
        opacity: myStyle3 ? "1" : "0",
        visibility: myStyle3 ? "visible" : "hidden"
    }
    const allstyle = [style1, style2, style3]
    function handleStyle() {
        setMyStyle(false);
        setTimeout(() => {
            setMyStyle1(true);
            setTimeout(() => {
                setMyStyle2(true);
                setTimeout(() => {
                    setMyStyle3(true);
                }, 250);
            }, 250);
        }, 250);
    }
    return(
        <Section>
            <Container>
                <TextCard title={title} dynamicEl={"h2"} dystyle
                    classname={"infotext"} paragraph pstyle
                >
                    {children}
                </TextCard>
                <EnteredDiv classname={"pageinfo"} threshold={"0.2"} whenDivIsentered={handleStyle}>
                    {config.map((item, index) => (
                        <Div className="col-md-4 card" key={index} style={allstyle[index]}>
                            <Div className="card-content" >
                                <H5 className="title" color={color}>{item.title}</H5>
                                <P className="text">{item.text}</P>
                                <Img src={item.img} alt={item.class} className={item.class}/>
                            </Div>
                        </Div>
                    ))}
                </EnteredDiv>
            </Container>
        </Section>
    );
};

const Section = styled.section`
    padding: 60px 16px 100px;
    @media only screen and (max-width: 992px) {
        padding-bottom: 50px;
    }
`;
 
const Div = styled.div`
    &.card {
        margin: 0 auto;
        padding: 30px!important;
        width: 352px;
        max-width: 360px!important;
        max-height: 654px;
        background-color: #fff!important;
        box-shadow: 0 0 1px 0 #ced3da;
        margin-bottom: 45px!important;
        min-height: 550px;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        @media only screen and (max-width: 992px) {
            padding: 30px!important;
        }
    }
    @media only screen and (min-width: 992px) {
        &.col-md-4 {
            flex: 33.333333% 1;
            max-width: 33.333333%;
        }
    }
    &.card-content {
        margin: 0 auto;
    }
`;

const H5 = styled.h5`
    &.title {
        margin-top: 25px!important;
        font-size: 36px;
        line-height: 42px;
        color: ${({color}) => color? color : theme.palette.SUBBLACK2};
        @media only screen and (max-width: 992px) {
            max-width: unset;
        }
        @media only screen and (max-width: 600px) {
            font-size: 30px!important;
            /* line-height: 35px; */
        }
        @media only screen and (max-width: 480px) {
            font-size: 19px;
        }
    }
`;

const P = styled.p`
    &.text {
        margin: 18px 0 10px;
        max-width: 290px;
        min-height: 80px;
        color: #3d4f60;
        @media only screen and (max-width: 600px) {
            font-size: 16px!important;
            line-height: 26px;
        }
    }
`;
const Img = styled.img`
        width: 110%;
        margin-top: 1rem;
        position: relative;
        left: -5%;
    &.info_img {
        width: 80%;
        position: absolute;
        left: 10%;
        bottom: -10px;
    }
`;
export default PageInfo;
