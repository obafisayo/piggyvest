import React from "react";
import styled from "styled-components";

function Container({classname, children}) {
     return(
          <StyledDiv className={classname ? classname : ""}>
               {children}
          </StyledDiv>
     );
}

const StyledDiv = styled.div`
     max-width: 1165px;
     margin: auto;
     &.flex {
          display: flex;
          justify-content: center;
     }
`;
export default Container