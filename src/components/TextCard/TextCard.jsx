import React, {useState} from "react";
import styled from "styled-components";

import EnteredDiv from "../Entereddiv/EnteredDiv";
import DownloadButton from "../download_button/Download_btn";
import Label from "../label/Label";

const DynamicElement = ({ element, ...restProps }) => {
  const Element = element;

  return <Element {...restProps} />;
};

function TextCard({dynamicEl, dystyle, label, label_img, pstyle, paragraph, title, children, button, classname}) {
     const [isDivEntered, setIsDivEntered] = useState(false);
     const [isDivEntered2, setIsDivEntered2] = useState(false);

     const style = {
          translate: "none",
          rotate: "none",
          scale: "none",
          transition: "all 0.5s ease-in",
          visibility: "inherit",
          opacity: isDivEntered ? "1" : "0",
          transform: isDivEntered ? "translate(0px, 0px)" : "translate(0px, 100px)",
     };
     const style1 = {
          translate: "none",
          rotate: "none",
          scale: "none",
          transition: "all 0.5s ease-in",
          visibility: "inherit",
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
               {style && <EnteredDiv threshold={0.5} whenDivIsentered={handleStyle} classname={classname}>
                              {dynamicEl && <DynamicElement element={dynamicEl} style={dystyle? style: {}} >{title}</DynamicElement>}
                              {label && <Label title={label} className={label} img={label_img} />}
                              {paragraph && <P className={classname} style={pstyle? style1: {}}>{children}</P>}
                         </EnteredDiv>
               }
               {button && <DownloadButton classname={classname} blak/>}
          </StyledDiv>
     );
};

const StyledDiv = styled.div`
     &.home-header, &.other-header{
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
          h1 {
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
     }
     &.other-header {
          margin-top: 4px;
          @media only screen and (max-width: 600px) {
               margin-top: 0;
          }
     }
     &.security-text {
          h4 {
               font-size: 24px;
               line-height: 33px;
               @media only screen and (max-width: 600px) {
                    font-size: 30px!important;
                    line-height: 35px;
               }
          }
     }
     &.savings {
          color: #122231;
          text-align: center;
          width: 565px;
          @media only screen and (max-width: 992px) {
               margin: auto auto -30px;
          }
          h3 {
               font-size: 48px;
               line-height: 66px;
               max-width: 350px;
               margin: auto;
               @media only screen and (max-width: 600px) {
                    font-size: 30px!important;
                    line-height: 35px;
               }
          }
     }
     &.infotext {
          margin-top: 10px;
          margin-bottom: 70px;
          text-align: center;
          @media only screen and (max-width: 992px) {
               margin-bottom: 50px;
          }
          h2 {
               font-size: 51px;
               line-height: 64.1px;
               @media only screen and (max-width: 480px)  {
                    font-size: 31px!important;
                    line-height: 39px!important;
               }
               @media only screen and (max-width: 992px) {
                    margin-bottom: 15px;
                    font-size: 41px;
                    line-height: 54px;
               }
          }
     }
`;
const P = styled.p`
     translate: none;
     rotate: none;
     scale: none;
     transition: all 0.5s ease-in;
     visibility: inherit;
     &.home-header, &.other-header {
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
     &.other-header {
          margin-top: 10px;
          max-width: 570px;
          @media only screen and (max-width: 1024px) {
               max-width: unset;
          }
          @media only screen and (max-width: 992px) {
               font-size: 20px;
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
