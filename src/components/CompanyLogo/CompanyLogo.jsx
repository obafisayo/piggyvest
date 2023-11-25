import React from "react";

import styled from "styled-components";
import Logo from "../../assets/static/svg/logo.svg"

import { ButtonLink } from "../link/Link";
import { HOME } from "../../routes/routeConstants";

function CompanyLogo() {
     return(
          <ButtonLink to={HOME} className={"logo"} style={{display: "flex"}}>
               <StyledImg src={Logo} alt="" width="225" height="40"/>
          </ButtonLink>
     );
}

const StyledImg = styled.img`
     position: relative;
     padding-right: 50px!important;
     bottom: 3px!important;
     @media only screen and (max-width: 992px) {
          top: 1.6px;
          bottom: 0!important;
          padding-right: 0!important;
          width: 155px;
     }
`;
export default CompanyLogo;
