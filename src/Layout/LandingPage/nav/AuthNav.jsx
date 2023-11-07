import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../../components/button/PrimaryButton";
import { ButtonLink } from "../../../components/link/Link";
import { ACCOUNT, SIGNIN, SIGNUP } from "../../../routes/routeConstants"
import SecondaryButton from "../../../components/button/SecondaryButton";

function AuthNav() {
     return(
          <StyledContainer>
               <ButtonLink to={`${ACCOUNT}/${SIGNIN}`}>
                    <PrimaryButton text={"Sign in"} classname={"bordered transparent"}/>
               </ButtonLink>

               <ButtonLink to={`${ACCOUNT}/${SIGNUP}`}>
                    <SecondaryButton classname={"background"} text={"Create free account"}/>
               </ButtonLink>
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
     @media only screen and (max-width: 992px) {
          display: none;
     }
`;