import React from "react";
import styled from "styled-components";
import { InternalNavlink } from "../../../components/link/Link";
import Img from "../../../components/img/Img";

function FooterNavComp({title, config, config1, connect}) {
    return (
        <Div className={!connect? `col-md-2x ${title.toLowerCase()}` : `col-md-3 ${title}`}>
            {!connect && <><P>{title}</P>
            {config.map((El, index) => (
                <InternalNavlink key={index} className={"footer_a"}
                    to={El.to}>{El.title}
                </InternalNavlink>
            ))}</>}
            {connect && <><Div className="socials">
                <Ul className="socials">
                    {config.map((social, index) => (
                        <Li key={index}>
                            <InternalNavlink className={"footer_li"}
                                target="_blank" rel="noreferrer noopener"
                                to={social.to}>
                                <Img src={social.src}  alt="social-icon" />
                            </InternalNavlink>
                        </Li>
                    ))}
                </Ul>
            </Div>
            {config1.map((add, index) => (
                <InternalNavlink className={"text-right"} key={index} to={add.to}>
                    {add.title}
                </InternalNavlink>
            ))}</>}
        </Div>
    )
};

const Div = styled.div`
    [class*=col-] {
        margin-bottom: 30px;
    }
    @media only screen and (min-width: 992px){
        &.col-md-2x {
            flex: 0 0 15%;
            max-width: 0 0 15%;
        }
        &.legal {
            flex: 0 0 20%;
            max-width: 0 0 20%;
        }
        &.col-md-3 {
            flex: 0 0 25%;
            max-width: 0 0 25%;
        }
    }
    &.products {
        @media only screen and (max-width: 992px) {
            order: 1;
            flex: 0 0 50%;
        }
        /* @media screen and (max-width: 1200px) {
            flex: 0 0 30%;
        } */
    }
    &.company {
        @media only screen and (max-width: 992px) {
            order: 2;
            flex: 0 0 50%;
        }
    }
    &.legal {
        @media only screen and (max-width: 992px) {
            order: 3;
        }
    }
    &.connect {
        @media only screen and (max-width: 992px) {
            order: 4;
        }
    }
    &.socials {
        @media only screen and (max-width: 992px) {
            align-self: center;
        }
    }
`;
const P = styled.p`
    font-family: Eina01-Bold !important;
    color: #122231;
    font-size: 14px;
    margin-bottom: 8px;
    line-height: 22.08px;
`;
const Ul = styled.ul`
    &.socials {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5px;
        @media only screen and (max-width: 1000px){
            justify-content: flex-start;
        }
    }
`;
const Li = styled.li`
    transition: .5s;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32.8px;
    height: 32px;
    @media only screen and (max-width: 992px){
        justify-content: flex-start;
    }
`;
export default FooterNavComp;
