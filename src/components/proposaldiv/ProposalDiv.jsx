import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container/Container";
import EnteredDiv from "../Entereddiv/EnteredDiv";
import DisplayStyles from "../displayStyles/DisplayStyles";
import { InternalNavlink } from "../link/Link";
import Img from "../img/Img";
import { TARGETSAVINGS } from "../../routes/routeConstants";

function ProposalDiv({title, config}) {
    const [myStyle, setMyStyle] = useState(false);
    const El = ({p, s}) => {
        return(
            <Div className="col-auto">
                <P className={"fw-bold"}>{p}</P>
                <small>{s}</small>
            </Div>
        )
    }
    return (
        <Section style={{paddingBottom: "0px"}}>
            <Container>
                <H2 className="title">{title}</H2>
                <EnteredDiv classname={"row main-row"} threshold={0.1}
                    whenDivIsentered={() => setMyStyle(true)}>
                    {config.map((item, index) => (
                        <DisplayStyles classname={"col-md-4"} key={index}
                            showStyle={myStyle} index={index} ariaLabel={'el'}>
                            <InternalNavlink to={`/${TARGETSAVINGS}/${item.id}`}>
                                <Img src={item.img} alt={"card image"}
                                    className={"proposal_img"}
                                />
                                <Div className="content box">
                                    <H5 className="title">{item.title}</H5>
                                    <Div className="item-row">
                                        <El p={item.members} s={"members"} />
                                        <El p={item.permember} s={"per member"} />
                                        <El p={item.days} s={"days left"} />
                                    </Div>
                                    <Div className="progress-container"
                                        style={{width: "80%"}}>
                                        <P className="fw-bold">{item.percentage}</P>
                                        <Div className="progress">
                                            <Div className="bar" 
                                                style={{width: `${item.percentage}`}}>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                            </InternalNavlink>
                        </DisplayStyles>
                    ))}
                </EnteredDiv>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    padding: 120px 16px 0;
    @media only screen and (max-width: 992px) {
        padding-top: 100px;
    }
`;
const H2 = styled.h2`
    &.title {
        margin-bottom: 65px;
        text-align: center;
        @media only screen and (max-width: 480px) {
            font-size: 31px!important;
            line-height: 39px;
        }
        @media only screen and (max-width: 992px) {
            font-size: 41px;
            line-height: 54px;
        }
    }
`;

const H5 = styled.h5`
    &.title {
        margin-bottom: 30px;
        margin-top: 10px;
        max-width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const P = styled.p`
    line-height: 10px;
    color: #3d4f60;
    /* margin-left: auto!important; */
    /* margin-right: auto!important; */
    &.fw-bold {
        font-family: Eina01-Bold;
        font-weight: 700;
    }
`;

const Div = styled.div`
    &.box {
        position: relative;
        width: 360px;
        background: #fff;
        cursor: pointer;
        border-radius: 0 0 20px 20px;
        text-align: left!important;
        padding: 30px 15px 30px 30px;
        top: -8px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 45px!important;
        max-width: 360px;
        transition: box-shadow .3s;
        @media only screen and (max-width: 767px) {
            padding: 30px!important;
        }
    }
    &.item-row {
        display: flex;
        flex-wrap: nowrap;
        margin-right: 0;
        margin-bottom: 15px;
        @media only screen and (max-width: 1024px) {
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -15px;
        }
    }
    &.col-auto {
        margin-bottom: 20px;
        @media only screen and (min-width: 992px) {
            flex: 0 0 auto;
            width: auto !important;
        }
        @media only screen and (max-width: 992px) {
            width: 50%!important;
        }
        small {
            color: #3d4f60;
        }
    }
    &.progress-container {
        margin-bottom: 5px!important;
        @media only screen and (max-width: 992px) {
            width: 100%!important;
        }
    }
    .progress-container &.progress {
        margin-top: 10px;
        width: 100%;
        height: 10px;
        overflow: hidden;
        background: #e5e5e5;
        border-radius: 100px;
    }
    .progress-container .progress &.bar {
        position: relative;
        float: left;
        min-width: 1%;
        height: 100%;
        background: #10b259;
    }
`;

export default ProposalDiv;
