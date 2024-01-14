import React from "react";
import styled from "styled-components";
import Img from "../img/Img";
import { theme } from "../../globalStyles";

function Label({title, img, className}) {
     return (
          <Div>
               <Img src={img} alt={"label-img"} width={"15px"}/>
               <P className={className? className : ""}>{title}</P>
          </Div>
     );
}

const Div = styled.div`
     display: flex;
     background: #eff5fc;
     display: inline-flex;
     grid-gap: 10px;
     gap: 10px;
     padding: 10px 20px;
     border-radius: 20px;
     margin: 1rem 0;
     align-items: center;
`;
const P = styled.p`
     font-family: Eina01-SemiBold;
     font-size: 17px;
     line-height: 23px;
     position: relative;
     top: 1px;
     @media only screen and (max-width: 992px) {
          margin-bottom: 0;
     }
     &.Automated {
          color: ${theme.palette.PIGGYBLUE};
     }
     &.Fixed {
          color: ${theme.palette.SAFEBLUE};
     }
     &.Goal-oriented {
          color: ${theme.palette.TARGETGREEN};
     }
     &.Flexible {
          color: ${theme.palette.FLEXPINK};
     }
     &.Dollar {
          color: ${theme.palette.FLEXBLACK};
     }
     &.Up {
          color: ${theme.palette.INVESTPURPLE};
     }
`;
export default Label;
