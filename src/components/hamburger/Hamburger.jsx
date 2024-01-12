import React, { useRef, useState } from "react";
import styled from "styled-components";
import {FLEXDOLLAR, FLEXNAIRA, HOME,
        INVEST,
        PIGGYBANK,
        SAFELOCK,
        TARGETSAVINGS
} from "../../routes/routeConstants";

function Hamburger({scrolled, path}) {
    const divRef = useRef(null);
    const [overflow, setOverflow] = useState(true);

    function handleClick() {
        setOverflow(!overflow);
        document.body.style.overflow = overflow ? "hidden" : "unset";
        const headerRefElement = divRef.current;
        headerRefElement.classList.toggle('is-active');
        headerRefElement.classList.toggle('clicked');
        const getHeader = document.querySelector('.getHead');
        if (getHeader){
            getHeader.classList.toggle('nav-active');
        }
        const getNav = document.querySelector('.getNav');
        if (getNav){
            getNav.classList.toggle("menu");
        }
        const getAuth = document.querySelector('.getAuth');
        if (getAuth){
            getAuth.classList.toggle("menu");
        }
    };

    return (
        <StyledDiv onClick={handleClick} ref={divRef} scrolled={scrolled} path={path}>
            <StyledSpan className="line top"></StyledSpan>
            <StyledSpan className="line mid"></StyledSpan>
            <StyledSpan className="line bot"></StyledSpan>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    position: absolute;
    top: -16px;
    right: -20px;
    padding: 20px;
    display: none;
    transition: all 0.2s ease-in-out;
    @media only screen and (max-width: 992px) {
        display: block;
    }
    &.is-active {
        transition: all .2s ease-in-out;
        transition-delay: .2s;
        transform: rotate(45deg);
        .top {
            transform: translateY(5px);
            background-color: red;
            transition-delay: .2s;
        }
        .mid {
            width: 0;
        }
        .bot {
            transition-delay: .2s;
            transform: translateY(-13px) rotate(90deg);
        }

    }
    ${({ scrolled, path }) => scrolled && path !== HOME ?
        ".line {background: #122231!important;}"
        :
        path !== HOME &&
        (path === `/${PIGGYBANK}` ||
        path === `/${SAFELOCK}` ||
        path === `/${TARGETSAVINGS}` ||
        path === `/${FLEXDOLLAR}` ||
        path === `/${FLEXNAIRA}` ||
        path === `/${INVEST}`) 
            ?
            ".line {background: #ffffff!important;}"
            :
            ".line {background: #122231!important;}"
    }
    &.clicked .line  {
        background: #122231!important;
    }
`;

const StyledSpan = styled.span`
    width: 28px;
    height: 3px;
    background-color: #3d4f60;
    margin: 6px auto;
    display: block;
    transition: all 0.2s ease-in-out;
    background: #122231;
    @media only screen and (max-width: 992px) {
        display: block;
    }
`;

export default Hamburger;
