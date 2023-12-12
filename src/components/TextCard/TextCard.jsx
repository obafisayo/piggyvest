import React, {useState} from "react";
import styled from "styled-components";

import SecondaryButton from "../../components/button/SecondaryButton"
import { ButtonLink } from "../link/Link";
import PlaystoreIcon from "../icons/PlaystoreIcon";
import WhiteAppleLogo from "../icons/WhiteAppleLogo";
import EnteredDiv from "../Entereddiv/EnteredDiv";

function TextCard({title, text, button, classname}) {
     const [isDivEntered, setIsDivEntered] = useState(false);
     const [isDivEntered2, setIsDivEntered2] = useState(false);

     const style = {
          opacity: isDivEntered ? "1" : "0",
          transform: isDivEntered ? "translate(0px, 0px)" : "translate(0px, 100px)",
     };
     const style1 = {
          opacity: isDivEntered2 ? "1" : "0",
          transform: isDivEntered2 ? "translate(0px, 0px)" : "translate(0px, 100px)",
     };

     function handleStyle() {
          setIsDivEntered(true);
          setTimeout(() => {
               setIsDivEntered2(true);
          }, 500);
     }
     return (
          <StyledDiv>
               <EnteredDiv threshold={0.5} whenDivIsentered={handleStyle} classname={"text-card"}>
                    <H1 style={style}>{title}</H1>
                    <P style={style1}>{text}</P>
               </EnteredDiv>
               {button &&
               <Div className="margin10">
                    <Div className="margin20">
                         <ButtonLink to={"https://apps.apple.com/ng/app/piggyvest/id1263117994"}>
                              <SecondaryButton classname={"download-btn"} 
                              icon={<WhiteAppleLogo />} 
                              text={"Get on iPhone"}
                              />
                         </ButtonLink>
                         <ButtonLink to={"https://play.google.com/store/apps/details?id=com.piggybankng.piggy"}>
                              <SecondaryButton classname={"download-btn"}
                              icon={<PlaystoreIcon />}
                              text={"Get on Android"}
                              />
                         </ButtonLink>
                    </Div>
               </Div>}
          </StyledDiv>
     );
};

const StyledDiv = styled.div`
     min-width: 600px;
     margin-top: 15px;
     @media only screen and (max-width: 1200px) {
          padding-bottom: 100px;
     }
     @media only screen and (max-width: 1024px) {
          text-align: center;
     }
     @media only screen and (max-width: 600px) {
          padding-bottom: unset;
          min-width: unset;
          margin-top: 0;
     }
`;
const Div = styled.div`
     min-width: 548px;
     &.margin10 {
          margin-top: 10px;
     }
     &.margin20 {
          margin-top: 20px;
          @media only screen and (max-width: 400px) {
               display: flex;
               flex-direction: column;
               gap: 1rem;
          }
          @media only screen and (max-width: 992px) {
               margin-top: 30px;
          }
     }
`;
const H1 = styled.h1`
     max-width: 459px;
     margin-top: -20px;
     font-size: 48px;
     line-height: 56px;
     letter-spacing: -.03em;
     translate: none;
     rotate: none;
     scale: none;
     transition: all 0.5s ease-in;
     visibility: inherit;     
     @media only screen and (max-width: 1024px) {
          max-width: unset;
     }
`;
const P = styled.p`
     max-width: 380px;
     font-size: 20px;
     line-height: 32px;
     margin-bottom: 30px;
     margin-top: 25px;
     translate: none;
     rotate: none;
     scale: none;
     transition: all 0.5s ease-in;
     visibility: inherit;
     @media only screen and (max-width: 1024px) {
          max-width: unset;
     }
     @media only screen and (max-width: 992px) {
          font-size: 16px;
          margin-left: 12px;
          margin-right: 12px;
     }
`;
export default TextCard;