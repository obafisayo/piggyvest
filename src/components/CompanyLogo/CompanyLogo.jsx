import React from "react";

import styled from "styled-components";
import Logo from "../../assets/static/svg/logo.svg"

import { ButtonLink } from "../link/Link";
import { HOME } from "../../routes/routeConstants";

function CompanyLogo() {
     return(
          <ButtonLink to={HOME}>
               <Container>
                    <img src={Logo} alt="" width="175" height="32"/>
               </Container>
          </ButtonLink>
     );
}

const Container = styled.div`
     position: relative;
     padding-right: 50px;
     bottom: -1px!important;
     left: 1px!important;
     scale: 1.05;
     z-index: -1;
     @media only screen and (max-width: 992px) {
          scale: .933;
          left: -12px!important;
          bottom: -5px!important;
     }
`;
     
export default CompanyLogo;
