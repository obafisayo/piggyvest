import React, { useEffect, useRef } from "react";
import styled, { StyleSheetManager } from "styled-components";
import CompanyLogo from "../../../components/CompanyLogo/CompanyLogo";
import Nav from "../nav/Nav";
import AuthNav from "../nav/AuthNav";
import Hamburger from "../../../components/hamburger/Hamburger";
import { useScrollContext } from "../../../ScrollContext";

export const Header = () => {
    const headerRef = useRef(null);
    const { path, scroll } = useScrollContext()

    useEffect(() => {
        const headerRefElement = headerRef.current;
        if (scroll) {
            headerRefElement.classList.add('scrolled');
        } else {
            headerRefElement.classList.remove('scrolled');
        }
    }, [scroll]);

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "scrolled"}>
            <StyledHeader className="getHead" ref={headerRef}>
                <Container>
                    <CompanyLogo scrolled={scroll} pathname={path} />
                    <Hamburger scrolled={scroll} path={path}/>
                    <Nav path={path} scrolled={scroll} />
                    <AuthNav path={path} scrolled={scroll} />
                </Container>
            </StyledHeader>
        </StyleSheetManager>
    );
}

const StyledHeader = styled.nav`
    padding: 18.5px 16px;
    position: fixed;
    width: 100%;
    z-index: 1000;
    transition: all .2s ease-in-out;
    &.scrolled {
        top: 0;
        left: 0;
        margin-top: 0;
        background-color: #fff;
        box-shadow: 0 0 7px 0 #ced3da;
    }
    &.nav-active {
        height: 100vh;
        background-color: #f2f7f8;
    }
    @media only screen and (max-width: 992px) {
        text-align: left;
        margin-top: 0;
        padding: 22px 32px!important;
    }
    @media only screen and (max-width: 1024px) {
        padding: 25px 32px;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1165px;
    margin: auto;
    align-items: center;
    position: relative;
    @media only screen and (max-width: 1024px) {
        display: block;
    }
`;
