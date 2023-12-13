import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";
import DownSideArrow from "../../../../components/icons/DownSideArrow";
import SecurityLock from "../../../../components/icons/SecurityLock";
import EnteredDiv from "../../../../components/Entereddiv/EnteredDiv";
import { InternalNavlink } from "../../../../components/link/Link";

function Investment() {
     const [isDivEntered, setIsDivEntered] = useState(false);
     const style = {
          opacity: isDivEntered ? "1" : "0",
          transform: isDivEntered ? "translate(0px, 0px)" : "translate(0px, 100px)",
     }
     function handleEntered() {
          setIsDivEntered(true);
     }
     return (
          <StyledSection className="investment security">
               <Container>
                    <Div className="dlgflex">
                         <Div className="left">
                              <Div className="ml-auto">
                                   <SecurityLock />
                              </Div>
                         </Div>
                         <Div className="right">
                              <EnteredDiv classname={"investment security content"} threshold={0.5} whenDivIsentered={handleEntered}>
                                   <H4 className="title security-title" style={style}>
                                        Your security is our priority
                                   </H4>
                                   <P className="text">
                                        PiggyVest uses the highest level of Internet Security and it 
                                        is secured by 256 bits SSL security encryption to ensure 
                                        that your information is comepletely protected from fraud.
                                   </P>
                                   <Div className="flex--2 learn-more">
                                        <DownSideArrow />
                                        <InternalNavlink className={"security-link"} to="/security">
                                                  More on our security measures
                                        </InternalNavlink>
                                   </Div>
                              </EnteredDiv>
                         </Div>
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
     &.learn-more {
          display: flex;
          align-items: center;
          margin: 10px 0 0;
     }
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
     &.right {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
     }
`;
const H4 = styled.h4`
     translate: none;
     rotate: none;
     scale: none;
     visibility: inherit;
     transition: all 0.5s ease-in;
     &.title {
          font-size: 24px;
          line-height: 33px;
          @media only screen and (max-width: 600px) {
               font-size: 30px!important;
               line-height: 35px;
          }
     }
`;
const P = styled.p`
     margin-top: 16px!important;
     max-width: 621px;
     font-size: 16px;
     @media only screen and (max-width: 600px) {
          font-size: 16px!important;
          line-height: 26px;
     }
     @media only screen and (max-width: 992px) {
          margin-left: auto!important;
          margin-right: auto!important;
     }
`;
export default Investment;