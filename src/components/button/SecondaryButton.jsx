import React from "react";
import styled from "styled-components";
import { FLEXDOLLAR, FLEXNAIRA, HOME, INVEST, PIGGYBANK, SAFELOCK, TARGETSAVINGS } from "../../routes/routeConstants";

function SecondaryButton({text, classname, icon, path, scrolled}) {
     return(
          <StyledButton className={classname ? classname : ""} path={path} scrolled={scrolled}>
               {icon} {text}
          </StyledButton>
     );
}

const StyledButton = styled.button`
     font-size: 16px;
     font-weight: 600;
     color: #fff!important;
     text-align: center;
     white-space: nowrap;
     padding: 15px 22px;
     border: 1px solid transparent;
     border-radius: 12px;
     font-family: Eina01-SemiBold;
     letter-spacing: -.03em;
     cursor: pointer;
     &.download-btn {
          position: relative;
          top: 0.5px;
          padding: 10px 16px 16.5px 16px!important;
          background: #122231;
          transition: all .3s ease-in-out!important;
          border: none!important;
          margin-right: 16px;
          @media only screen and (max-width: 600px) {
               font-weight: 300!important;
          }
          @media only screen and (max-width: 992px) {
               margin: 0 8px;
          }
     }
     &.white {
          background: #ffffff;
          color: #122231!important;
     }
     &.background {
          transition: background-color .8s;
     }
     ${({ scrolled, path }) =>
          scrolled && path !== HOME
               ? `
          &.background {
               background: #122231;
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
          &.background {
               background: #ffffff;
               color: #122231!important;
          }
          `
               : `
          &.background {
               background: #122231;
          }
          `
     }
     &.d-blockNfullwidth {
          display: block;
          width: 100%;
          @media only screen and (max-width: 992px) {
               padding: 18px 22px;
          }
     }
`;

export default SecondaryButton;
