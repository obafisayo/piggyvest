import React from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";
import SecurityLock from "../../../../components/icons/SecurityLock";
import Card from "./Card";

function Investment() {
     return (
          <StyledSection className="investment security">
               <Container>
                    <Div className="dlgflex">
                         <Div className="left">
                              <Div className="ml-auto">
                                   <SecurityLock />
                              </Div>
                         </Div>
                         <Card classname={"right"}
                         link_text={"More on our security measures"}
                         title={"Your security is our priority"}>
                              PiggyVest uses the highest level of Internet Security and it 
                              is secured by 256 bits SSL security encryption to ensure 
                              that your information is comepletely protected from fraud.
                         </Card>
                    </Div>
               </Container>
          </StyledSection>
     );
};

const StyledSection = styled.section`
     padding: 40px 16px 100px;
     @media only screen and (max-width: 992px) {
          padding-top: 90px;
          padding-bottom: 70px;
     }
     `;
const Div = styled.div`
     &.dlgflex {
          @media only screen and (min-width: 992px) {
               display: flex;
          }
     }
     &.ml-auto {
          margin-right: 10px;
          margin-left: auto;
          @media only screen and (max-width: 992px) {
               margin-right: 0!important;
          }
     }
     img {
          max-width: 100px!important;
          height: auto;
          @media only screen and (max-width: 992px) {
               margin-bottom: 40px;
          }
     }
     svg {
          position: unset;
          top: 2px;
          vertical-align: bottom;
          margin-right: 10px;
     }
`;
export default Investment;