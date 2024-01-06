import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PiggyvestLogo from "../../../assets/static/svg/piggyvest_logo.svg"
import Compliance from "../../../assets/static/img/compliance.webp"
import facebook from "../../../assets/static/svg/facebook.svg"
import twitter from "../../../assets/static/svg/twitter.svg"
import instagram from "../../../assets/static/svg/instagram.svg"
import tiktok from "../../../assets/static/svg/tiktok.svg"
import youtube from "../../../assets/static/svg/youtube.svg"
import Brand from "./brands/Brand";

const StyledFooter = styled.footer`
    padding: 80px 16px 50px;
    font-size: 12.82px;
    background: #fff;
    .container {
        max-width: 1165px;
        margin: auto;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .about {
        margin: 16px 0 30px;
        border-top: 0.2px solid hsla(0,0%,74.1%,.5215686275);
        padding-top: 26px;
    }
    [class*=col-] {
        margin-bottom: 30px;
    }
    .img-container {
        display: flex;
        flex-direction: column;
        max-width: 173px;
        align-items: center;
    }
    .logo {
        display: inline-flex;
    }
    .mb-25 {
        margin-bottom: 25px;
    }
    a {
        display: block;
        text-align: left;
        font-weight: 300!important;
        transition: color .5s;
    }
    .socials-cont p, a {
        color: #3d4f60;
        letter-spacing: -.03em;
    }
    [class*=col-] p, a, Link {
        font-size: 14px;
        margin-bottom: 8px;
        line-height: 22.08px;
    }
    [class*=col-] p {
        font-family: Eina01-Bold !important;
        color: #122231;
    }
    .socials ul {
        margin-bottom: 5px;
    }

    .flex--1, .flex--2 {
        display: flex;
    }
    .jc-fe, .jc-lg-fe {
        justify-content: flex-end;
    }
    .socials li a {
        color: #122231;
        display: inline;
        margin-bottom: 0;
    }
    .socials li {
        transition: .5s;
        line-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32.8px;
        height: 32px;
    }
    .connect a {
        line-height: 21px;
        margin-bottom: 15px;
    }
    .text-right {
        text-align: right;
    }
    .about p {
        font-size: 11px;
    }

    .about__body, .about__sec-body {
        max-width: 441px;
        margin-bottom: 12px;
        line-height: 22px;
        color: rgba(61,79,96,.6509803922);
    }
    .about__body {
        max-width: 619px;
        margin-bottom: 31px;
    }
    .primary {
        color: #083e9e;
    }

    @media screen and (min-width: 992px){
        .col-md-3 {
            flex: 0 0 25%;
            max-width: 0 0 25%;
        }
        .col-md-2x {
            flex: 0 0 15%;
            max-width: 0 0 15%;
        }
        .col-md-2s {
            flex: 0 0 20%;
            max-width: 0 0 20%;
        }
        .col-md-3 {
            flex: 0 0 25%;
            max-width: 0 0 25%;
        }

    }
    
    @media screen and (max-width: 928px){
        padding-bottom: 10px;
        .connect {
            order: 4;
        }
        .connect a, .connect p {
            text-align: left;
        }
        .socials {
            align-self: center;
        }
        .faq .accordion__button h3{
            text-align: left;
        }
    }
    @media screen and (max-width: 1000px){
        .socials ul {
            justify-content: flex-start;
        }
    }
`;

function Footer() {
    return(
        <div>
            <Brand/>
            <StyledFooter style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3" style={{display: "flex", flexDirection: "column"}}>
                            <div className="img-container">
                                <Link className="logo mb-25" to="/">
                                    <img src={PiggyvestLogo} alt="" width="172.45" height="32"/>
                                </Link>
                                <img src={Compliance} alt="" width="102.14"/>
                            </div>
                        </div>
                        <div className="col-md-2x products">
                            <p>Products</p>
                            <Link to="/piggybank">Piggybank</Link>
                            <Link to="/invest">Invest</Link>
                            <Link to="/safelock">Safelock</Link>
                            <Link to="/targets">Target Savings</Link>
                            <Link to="/flex-naira">Flex Naira</Link>
                            <Link to="/flex-dollar">Flex Dollar</Link>
                        </div>
                        <div className="col-md-2x company">
                            <p>Company</p>
                            <Link to="/about">About</Link>
                            <Link to="/faq">FAQs</Link>
                            <a target="_blank" rel="noreferrer" href="https://blog.piggyvest.com/">Blog</a>
                        </div>
                        <div className="col-md-2s legal">
                            <p>Legal</p>
                            <Link to="/terms">Terms</Link>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/security">Security</Link>
                        </div>
                        <div className="col-md-3 connect">
                            <div className="socials">
                                <ul className="flex--1 jc-fe socials undefined">
                                    <li className="">
                                        <a className="" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/PiggyBankNG/">
                                            <img src={facebook}  alt="" />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/piggybankng/">
                                        <img src={instagram}  alt="" />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="" target="_blank" rel="noreferrer noopener" href="https://mobile.twitter.com/PiggyBankNG/">
                                            <img src={twitter}  alt="" />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="" target="_blank" rel="noreferrer noopener" href="https://www.tiktok.com/@piggybank_ng?_t=8cwbLU1TTcs&amp;_r=1">
                                            <img src={tiktok} alt=""  />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a className="" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/@PiggyVest">
                                            <img src={youtube}  alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a className="text-right" href="https://goo.gl/maps/NpjEYTjJuzxCUM9X7">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</a>
                            <a className="text-right" href="mailto:contact@psiggyvest.com">contact@piggyvest.com</a>
                            <a className="text-right" href="tel:+234700933933933">+234 700 933 933 933</a>
                        </div>
                    </div>
                    <div className="about">
                        <p className="about__body">Piggyvest (formerly piggybank.ng) is the leading online savings &amp; investing platform in Nigeria. For over 7 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
                        <p className="about__sec-body"> PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria. </p>
                        <p className="primary">2016 - 2023 PiggyTech Global Limited - RC 1405222</p>
                    </div>
                </div>
            </StyledFooter>
        </div>
    );
}
export default Footer;