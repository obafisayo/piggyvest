import React from "react";
import styled from "styled-components"
import PiggyvestLogo from "../assets/piggyvest_logo.svg"
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
    padding: 80px, 16px, 50px;
    font-size: 12.82px;
    background: #fff;

    @media screen and (max-width: 928px){
        /* padding-bottom: 10px; */
        .faq .accordion__button h3{
            text-align: left;
        }
    }
`;

function Footer() {
    return(
        <StyledFooter style={{translate: "none", rotate: "none", scale: "none", opacity: "1", visibility: "inherit", transform: "translate(0px, 0px)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3" style={{display: "flex", flexDirection: "column"}}>
                        <div className="img-container">
                            <Link className="logo mb-25" to="/">
                                <img src={PiggyvestLogo} alt="" width="172.45" height="32"/>
                            </Link>
                            <img src="" alt="" width="102.14"/>
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
                        <a target="_blank" href="https://blog.piggyvest.com/">Blog</a>
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
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/piggybankng/">
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" target="_blank" rel="noreferrer noopener" href="https://mobile.twitter.com/PiggyBankNG/">
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" target="_blank" rel="noreferrer noopener" href="https://www.tiktok.com/@piggybank_ng?_t=8cwbLU1TTcs&amp;_r=1">
                                    </a>
                                </li>
                                <li className="">
                                    <a className="" target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/@PiggyVest">
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
    );
}
export default Footer;