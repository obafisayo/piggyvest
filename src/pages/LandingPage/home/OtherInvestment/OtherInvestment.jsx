import React from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";
import SavingsBox from "../../../../components/savingsBox/SavingsBox";
import IphoneInvestImg from "../../../../assets/static/img/iphoneInvest.avif";

function OtherInvestment() {
     return (
          <StyledSection>
               <Container classname={"flex-align"}>
                    <H2>Diverse ways to Invest</H2>
                    <P>Grow your money and invest for your future confidently.</P>
                    <SavingsBox img={IphoneInvestImg}
                         color={"#7913e5"}
                         title={"Earn Up to 25% returns"}
                         subtitle={"Learn about Investments"}
                         classname={"invest active"}
                         invest
                         nohover
                         path={"/invest"}
                    >
                         Invest securely and confidently on the go. 
                         Grow your money confidently by investing in 
                         pre-vetted investment opportunities.zz
                    </SavingsBox>
               </Container>
          </StyledSection>
     );
};

const StyledSection = styled.section`
     background: #fff;
     padding: 10rem 16px;
     @media only screen and (max-width: 600px) {
     padding: 6rem 1rem 4rem;
     margin-bottom: 0;
     }
     @media only screen and (max-width: 992px) {
     padding-top: 20px;
     padding-bottom: 90px;
}
`;
const H2 = styled.h2`
     word-break: break-word;
     @media only screen and (max-width: 600px) {
          max-width: 400px;
          font-size: 30px!important;
          line-height: 35px;
     }
`;
const P = styled.p`
     font-size: 24px;
     line-height: 33px;
     font-weight: 400!important;
     margin-top: 10px;
     @media only screen and (max-width: 600px) {
          font-size: 18px!important;
          line-height: 26px;
     }

`;
export default OtherInvestment;