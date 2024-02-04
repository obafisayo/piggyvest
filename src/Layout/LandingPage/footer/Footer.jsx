import React, { useState } from "react";
import styled from "styled-components";

import PiggyvestLogo from "../../../assets/static/svg/piggyvest_logo.svg"
import Compliance from "../../../assets/static/img/compliance.webp"
import Brand from "./brands/Brand";
import EnteredDiv from "../../../components/Entereddiv/EnteredDiv";
import Container from "../../../components/container/Container";
import { HOME } from "../../../routes/routeConstants";
import { InternalNavlink } from "../../../components/link/Link";
import Img from "../../../components/img/Img";
import { ProductConfig, aboutConfig, addressConfig, companyConfig, legalConfig, socialConfig } from "./footerConfig";
import FooterNavComp from "./FooterNavComp";

function Footer() {
    const [isDivEntered, setIsDivEntered] = useState(false)
    const [isDivEntered2, setIsDivEntered2] = useState(false)
    function handleStyle() {
        setIsDivEntered(true);
        setTimeout(() => {
            setIsDivEntered2(true);
        }, 500);
    }
    const style = {
        translate: "none",
        rotate: "none",
        scale: "none",
        transition: "all 0.5s ease-in",
        visibility: "inherit",
        opacity: isDivEntered ? "1" : "0",
        transform: isDivEntered ? "translate(0px, 0px)" : "translate(0px, 100px)",
    };
    const style1 = {
        translate: "none",
        rotate: "none",
        scale: "none",
        transition: "all 0.5s ease-in",
        visibility: "inherit",
        opacity: isDivEntered2 ? "1" : "0",
        transform: isDivEntered2 ? "translate(0px, 0px)" : "translate(0px, 100px)",
    };
    return(
        <EnteredDiv threshold={0.1} whenDivIsentered={handleStyle}>
            <Brand style={style} isDivEntered={isDivEntered2}/>
            <StyledFooter style={style1} className="footer">
                <Container>
                    <Div className="row">
                        <Div className="col-md-3" style={{display: "flex", flexDirection: "column"}}>
                            <Div className="img-container">
                                <InternalNavlink className={"footer_logo"} to={HOME}>
                                    <Img src={PiggyvestLogo} alt={"footer_logo"} width={"172.45"} height={"32"} />
                                </InternalNavlink>
                                <Img src={Compliance} alt={"sub_logo"} width={"102.14"} />
                            </Div>
                        </Div>
                        <FooterNavComp title={"Products"} config={ProductConfig}/>
                        <FooterNavComp title={"Company"} config={companyConfig}/>
                        <FooterNavComp title={"Legal"} config={legalConfig}/>
                        <FooterNavComp connect title={"connect"} config={socialConfig} config1={addressConfig}/>
                    </Div>
                    <Div className="about">
                        {aboutConfig.map((ab, index) => (
                            <P key={index} className={ab.class}>{ab.text}</P>
                        ))}
                    </Div>
                </Container>
            </StyledFooter>
        </EnteredDiv>
    );
}

const StyledFooter = styled.footer`
    padding: 80px 16px 50px;
    font-size: 12.82px;
    background: #fff;
    &.footer a {
        color: #3d4f60;
        letter-spacing: -.03em;
    }
    @media only screen and (max-width: 992px) {
        padding-bottom: 10px;
        text-align: left;
    }
    [class*=col-] {
        margin-bottom: 30px;
    }
`;
const Div = styled.div`
    &.row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        @media only screen and (max-width: 1024px) {
            margin-left: 0;
            margin-right: 0;
        }
    }
    &.col-md-3 {
        @media only screen and (min-width: 992px){
            flex: 0 0 25%;
            max-width: 0 0 25%;
        }
    }
    &.img-container {
        display: flex;
        flex-direction: column;
        max-width: 173px;
        align-items: center;
        @media only screen and (max-width: 992px) {
            align-items: flex-start;
            margin-bottom: 30px;
        }
    }
    &.about {
        margin: 16px 0 30px;
        border-top: 0.2px solid hsla(0,0%,74.1%,.5215686275);
        padding-top: 26px;
        font-size: 11px;
    }
`;

const P = styled.p`
    &.about__body, &.about__sec-body {
        max-width: 441px;
        margin-bottom: 12px;
        line-height: 22px;
        color: rgba(61,79,96,.6509803922);
    }
    &.about__body {
        max-width: 619px;
        margin-bottom: 31px;
    }
    &.primary {
        color: #083e9e;
    }
`;

export default Footer;
