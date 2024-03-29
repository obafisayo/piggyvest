import React from "react";
import styled from "styled-components";
import {
    FLEXDOLLAR,
    FLEXNAIRA,
    HOME,
    INVEST,
    PIGGYBANK,
    SAFELOCK,
    TARGETSAVINGS,
} from "../../routes/routeConstants";

function PrimaryButton({ classname, text, icon, path, scrolled }) {
    return (
        <StyledButton className={classname ? classname : ""} scrolled={scrolled} path={path}>
            {icon} {text}
        </StyledButton>
    );
}

export default PrimaryButton;

const StyledButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    color: #fff !important;
    text-align: center;
    white-space: nowrap;
    padding: 15px 22px;
    border: 1px solid transparent;
    border-radius: 12px;
    font-family: Eina01-SemiBold;
    letter-spacing: -.03em;
    cursor: pointer;

    &.bordered {
        transition: border 0.8s, color 0.8s;
    }
    .nav-active &.bordered {
        color: #122231 !important;
        background-color: transparent;
        border: 1px solid #122231;
    }
    ${({ scrolled, path }) =>
        scrolled && path !== HOME
            ? `
        &.bordered {
            color: #0c1825 !important;
            border: 1px solid #0c1825;
        }
        `
            :
        path !== HOME &&
        (path === `/${PIGGYBANK}` ||
        path === `/${SAFELOCK}` ||
        path === `/${TARGETSAVINGS}` ||
        path === `/${FLEXDOLLAR}` ||
        path === `/${FLEXNAIRA}` ||
        path === `/${INVEST}`)
            ? `
        &.bordered {
            color: #ffffff !important;
            border: 1px solid #ffffff;
        }
        `
            : `
        &.bordered {
            color: #0c1825 !important;
            border: 1px solid #0c1825;
        }
        `
    }

    &.transparent {
    background: transparent;
    }

    &.d-blockNfullwidth {
    display: block;
    width: 100%;

    @media only screen and (max-width: 992px) {
        padding: 18px 22px;
    }
    }

    &.download-btn {
    position: relative;
    color: #122231 !important;
    padding: 7px 16px;
    border: 1px solid #ddd !important;
    border-radius: 12px !important;
    display: inline-block;
    font-size: 12.82px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
    top: 0;

    @media only screen and (max-width: 992px) {
        margin-left: 5px;
        margin-right: 5px;
    }
    }

    &.download-btn:first-child {
    margin-right: 15px;

    @media only screen and (max-width: 992px) {
        margin-left: 5px;
        margin-right: 5px;
    }
    }
`;
