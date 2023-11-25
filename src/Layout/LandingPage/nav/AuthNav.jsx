import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../components/button/PrimaryButton";
import { ButtonLink } from "../../../components/link/Link";
import { ACCOUNT, SIGNIN, SIGNUP } from "../../../routes/routeConstants"
import SecondaryButton from "../../../components/button/SecondaryButton";

function AuthNav() {
     return(
          <StyledContainer className="getAuth">
               <li>
                    <ButtonLink to={`${ACCOUNT}/${SIGNIN}`} >
                         <PrimaryButton text={"Sign in"} classname={"bordered transparent d-blockNfullwidth"}/>
                    </ButtonLink>
               </li>
               <li>
                    <ButtonLink to={`${ACCOUNT}/${SIGNUP}`}>
                         <SecondaryButton classname={"background d-blockNfullwidth"} text={"Create free account"}/>
                    </ButtonLink>
               </li>
          </StyledContainer>
     );
}
export default AuthNav;

const StyledContainer = styled.div`
     margin-left: auto;
     display: flex;
     gap: 0.5rem;
     font-family: Eina01-SemiBold,sans-serif;
     line-height: 27px;
     letter-spacing: -.01em;
     transition: all .3s ease-in;
     li {
          display: inline block;
          list-style: none;
          padding: 0;
          margin: 0;
          @media only screen and (max-width: 992px) {
               text-align: center;
               padding-right: 0!important;
               padding: 15px 0;
          }
     }
     &.menu {
          display: block;
          opacity: 1;
     }
     @media only screen and (max-width: 992px) {
          display: none;
     }
`;