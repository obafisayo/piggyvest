import React from "react";
import styled from "styled-components"

function PrimaryButton({classname, text, icon}) {
     return(
          <StyledButton className={classname ? classname : ""}>
               {icon} {text}
          </StyledButton>
     );
}

export default PrimaryButton;

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
     &.bordered {
          -webkit-transition: border .8s,color .8s;
          -moz-transition: border .8s,color .8s;
          transition: border .8s,color .8s;
     }
     &.bordered, :hover {
          color: #0c1825!important;
          border: 1px solid #0c1825;
     }
     &.transparent {
          background: transparent;
     }
`;