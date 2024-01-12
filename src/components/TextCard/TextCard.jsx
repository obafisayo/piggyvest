import React, {useState} from "react";
import styled from "styled-components";

import EnteredDiv from "../Entereddiv/EnteredDiv";
import DownloadButton from "../download_button/Download_btn";
import Label from "../label/Label";

function TextCard({label, label_img, header3, h1style, header4, h4style, pstyle, header1, paragraph, title, children, button, classname}) {
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
          <StyledDiv className={classname}>
               {header3 && <H3 className={classname}>{title}</H3>}
               {style && <EnteredDiv threshold={0.5} whenDivIsentered={handleStyle} classname={classname}>
                              {header1 && <H1 className={classname} style={h1style? style: {}}>{title}</H1>}
                              {header4 && <H4 className={classname} style={h4style? style: {}}>{title}</H4>}
                              {label && <Label title={label} className={label} img={label_img} />}
                              {paragraph && <P className={classname} style={pstyle? style1: {}}>{children}</P>}
                         </EnteredDiv>
               }
               {button && <DownloadButton classname={"black"} blak/>}
          </StyledDiv>
     );
};

const StyledDiv = styled.div`
     &.home-header {
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
     }
     &.savings {
        color: #122231;
        text-align: center;
        width: 565px;
        @media only screen and (max-width: 992px) {
            margin: auto auto -30px;
        }
    }
`;
const H1 = styled.h1`
     translate: none;
     rotate: none;
     scale: none;
     transition: all 0.5s ease-in;
     visibility: inherit;
     &.home-header {
          max-width: 459px;
          margin-top: -20px;
          font-size: 48px;
          line-height: 56px;
          letter-spacing: -.03em;
          @media only screen and (max-width: 480px) {
               font-size: 45px!important;
          }
          @media only screen and (max-width: 1024px) {
               max-width: unset;
          }
     }  
`;
const H3 = styled.h3`
     font-size: 48px;
     line-height: 66px;
     max-width: 350px;
     margin: auto;
     @media only screen and (max-width: 600px) {
          font-size: 30px!important;
          line-height: 35px;
     }
`;
const H4 = styled.h4`
     translate: none;
     rotate: none;
     scale: none;
     visibility: inherit;
     transition: all 0.5s ease-in;
     &.security-text {
          font-size: 24px;
          line-height: 33px;
          @media only screen and (max-width: 600px) {
               font-size: 30px!important;
               line-height: 35px;
          }
     }
`;
const P = styled.p`
     translate: none;
     rotate: none;
     scale: none;
     transition: all 0.5s ease-in;
     visibility: inherit;
     &.home-header {
          max-width: 380px;
          font-size: 20px;
          line-height: 32px;
          margin-bottom: 30px;
          margin-top: 25px;
          @media only screen and (max-width: 1024px) {
               max-width: unset;
          }
          @media only screen and (max-width: 992px) {
               font-size: 16px;
               margin-left: 12px;
               margin-right: 12px;
          }
     }
     &.security-text {
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
     }
     &.savings {
          margin: 18px auto 53px;
          font-size: 24px;
          max-width: 350px;
          line-height: 35px;
          @media only screen and (max-width: 600px) {
               font-size: 16px!important;
               line-height: 26px;
          }
          @media only screen and (max-width: 992px) {
               margin-left: auto!important;
               margin-right: auto!important;
          }
     }
`;
export default TextCard;