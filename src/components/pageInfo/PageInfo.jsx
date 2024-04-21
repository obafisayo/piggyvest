import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container/Container";
import TextCard from "../TextCard/TextCard";
import EnteredDiv from "../Entereddiv/EnteredDiv";
import { theme } from "../../globalStyles";
import DisplayStyles from "../displayStyles/DisplayStyles";

function PageInfo({title, children, color, config}) {
    const [myStyle, setMyStyle] = useState(false);
    return(
        <Section>
            <Container>
                <TextCard title={title} dynamicEl={"h2"} dystyle
                    classname={"infotext"} paragraph pstyle
                >
                    {children}
                </TextCard>
                <EnteredDiv classname={"pageinfo"} threshold={"0.2"}
                    whenDivIsentered={() => setMyStyle(true)}>
                    {config.map((item, index) => (
                        <DisplayStyles classname={"col-md-4 card"} key={index}
                            showStyle={myStyle} index={index}>
                            <Div className="card-content" >
                                <H5 className="title" color={color}>{item.title}</H5>
                                <P className="text">{item.text}</P>
                                <Img src={item.img} alt={item.class}
                                    className={item.class}
                                />
                            </Div>
                        </DisplayStyles>
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
