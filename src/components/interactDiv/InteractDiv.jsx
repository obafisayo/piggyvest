import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

function InteractDiv({title, children, img, background}) {
    const style = {
        opacity: "1",
        visibility: "inherit"
    }
    const style1 = {
        backgroundImage: img,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <Section className="interact">
            <Div className="flex">
                <Div className="col-md-7 left pd-80" background={background}>
                    <Div className="content" style={style}>
                        <H2 className="title" background={background}>{title}</H2>
                        <P className="text">{children}</P>
                    </Div>
                </Div>
                <Div className="col-md-5 right" style={style1}></Div>
            </Div>
        </Section>
    );
};

const Section = styled.section`
    color: white;
    &.interact .left {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 85px;
    }
`;
const Div = styled.div`
    &.flex {
        @media only screen and (min-width: 993px) {
            display: flex;
        }
    }
    &.left {
        display: flex;
        position: relative;
        background-color: ${({background}) => background? background : theme.palette.SUBBLACK1};
    }
    &.pd-80 {
        padding: 80px 0;
    }
    @media only screen and (min-width: 992px) {
        &.col-md-7 {
            flex: 0 0 58.333333%;
            max-width: 0 0 58.333333%;
        }
        &.col-md-5 {
            flex: 0 0 41.666667%;
            max-width: 0 0 41.666667%;
        }
    }
    &.right {
        @media only screen and (max-width: 992px) {
            height: 400px;
        }
    }
    &.content {
        max-width: 460px;
        margin: auto;
        @media only screen and (min-width: 768px) {
            margin-right: 29%;
            margin-left: auto;
        }
        @media only screen and (max-width: 992px) {
            margin-left: auto!important;
            margin-right: auto!important;
        }
    }
`;

const H2 = styled.h2`
    &.title {
        color: white;
        background-color: ${({background}) => background? background : theme.palette.SUBBLACK1};
        @media only screen and (max-width: 480px) {
            font-size: 31px!important;
            line-height: 39px;
        }
        @media only screen and (max-width: 600px) {
            font-size: 30px!important;
            line-height: 35px;
        }
        @media only screen and (max-width: 992px) {
            font-size: 41px;
            line-height: 54px;
        }
    }
`;

const P = styled.p`
    &.text {
        margin: 15px 0 0;
        max-width: 450px;
        @media only screen and (max-width: 600px) {
            font-size: 16px!important;
            line-height: 26px;
        }
        @media only screen and (max-width: 992px) {
            margin-left: auto!important;
            margin-right: auto!important;
        }
    }
`;

export default InteractDiv;
