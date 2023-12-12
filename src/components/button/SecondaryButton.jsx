import React from "react";
import styled from "styled-components";

function SecondaryButton({text, classname, icon}) {
     return(
          <StyledButton className={classname ? classname : ""}>
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
     &.background {
          background: #122231;
          transition: background-color .8s;
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
