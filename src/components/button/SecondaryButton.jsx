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
     &.background {
          background: #122231;
          -webkit-transition: background-color .8s;
          -moz-transition: background-color .8s;
          transition: background-color .8s;
     }
`;

export default SecondaryButton;
