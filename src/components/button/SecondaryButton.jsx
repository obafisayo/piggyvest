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
