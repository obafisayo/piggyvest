import React from "react";
import styled from "styled-components";
import DownSideArrow from "../icons/DownSideArrow";
import { InternalNavlink } from "../link/Link";
import Img from "../img/Img";
// import styled from "styled-components";

function SavingsBox({title, subtitle, children, img, color, path, classname, invest, nohover}) {
     const style = {
          opacity: "1",
          visibility: "inherit",
          color: color,
     }
     return (
          <Div className={`box home ${classname}`} style={style} color={color} $nohover={nohover}>
               <InternalNavlink to={path} className={"block"}>
                    <Div className={invest? "block" : "flex"}>
                         <Div className="false">
                              <H5 className="title" style={style}>{title}</H5>
                              <P className="text">{children}</P>
                              <Div className="sub-title" style={{color: color}}>
                                   <DownSideArrow stroke={color} width={"30"} height={"30"} viewBox={"0 0 30 30"} className={"savings-svg"}/>
                                   <Span>{subtitle}</Span>
                              </Div>
                         </Div>
                         <Div className="img-card">
                              <Img src={img} alt={"savings-box"} className={"img-card"}/>
                         </Div>
                    </Div>
               </InternalNavlink>
          </Div>
     );
};

const Div = styled.div`
  ${({ $nohover }) =>
    $nohover
      ? null
      : `
          &.box {
            margin: 0 auto;
            border-radius: 20px;
            padding: 30px 10px 30px 30px;
            box-shadow: 0 0 1px 0 #ced3da;
            background-color: white;
            &:hover {
              .title {
                color: #fff!important;
                transition: color .3s ease;
              }
              .sub-title {
                color: #fff!important;
                transition: color .3s ease;
              }
              .text {
                color: #fff!important;
                transition: color .3s ease;
              }
              .img-card {
                width: 250px;
                visibility: visible;
                bottom: 0;
                right: 20px;
                @media only screen and (max-width: 600px) {
                  width: 170px;
                  right: 16px;
                }
              }
              .savings-svg {
                stroke: #fff!important;
                transition: color .3s ease;
              }
            }
          }
     `}
     &.savings:hover {
     cursor: pointer;
     background-color: ${({ color }) => color};
     }
     &.active {
          background-color: ${({color}) => color};
     }
     &.home {
          position: relative;
          transition: all .3s ease;
          margin: unset;
          overflow: hidden;
          height: 450px;
          width: 565px;
          margin-bottom: 0!important;
          @media only screen and (max-width: 600px){
               width: 90vw;
               max-width: 370px;
               margin-bottom: 0!important 
          }
          @media only screen and (max-width: 992px) {
               padding: 30px!important;
          }
     }
     &.invest {
          display: flex;
          background: #7913e5;
          border-radius: 30px;
          width: 100%;
          max-width: 1250px;
          height: 500px;
          padding: 4rem;
          margin: 4rem 0;
          position: relative;
          overflow: hidden;
          @media only screen and (max-width: 600px) {
               margin-top: 2.5rem;
          }
          @media only screen and (max-width: 1024px) {
               height: fit-content;
               flex-wrap: wrap;
               justify-content: center;
               padding: 4rem 5%;
          }
     }
     &.flex {
          display: flex;
     }
     &.sub-title {
          position: absolute;
          top: 85%;
          font-weight: 500;
          color: #3d4f60;
          transition: margin-left .2s ease-out;
          margin-right: 10px;
          vertical-align: bottom;
          @media only screen and (max-width: 600px){
               margin-right: 0;
               font-size: 15px;
          }
     }
     .invest &.sub-title {
          margin: 20px 0 0;
          transition: all .2s linear;
          display: flex;
          align-items: center;
          width: calc(100% - 40px);
          @media only screen and (max-width: 600px){
               justify-content: center;
               position: relative;
          }
     }
     &.sub-title span:hover {
          background-size: 100% 100%;
          background-image: linear-gradient(180deg,transparent 65%,#abb7ca 0);
     }
     .active &.sub-title {
          color: #fff!important;
          transition: color .3s ease;
     }
`;
const H5 = styled.h5`
     &.title {
          margin-top: 25px!important;
          font-size: 36px;
          line-height: 42px;
          @media only screen and (max-width: 600px){
               margin-top: 25px!important;
               font-size: 30px;
               line-height: 42px;
          }
          @media only screen and (max-width: 992px){
               max-width: unset;
          }
     }
     .invest &.title {
          translate: none;
          rotate: none;
          scale: none;
          opacity: 1;
          visibility: inherit;
          transform: translate(0px, 0px);
          max-width: 400px;
          font-size: 36px;
          line-height: 50px;
          @media only screen and (max-width: 600px) {
               max-width: 400px;
               font-size: 30px!important;
               line-height: 35px;
          }
          @media only screen and (max-width: 1024px) {
               max-width: unset;
          }
     }
     .active &.title {
          color: #fff!important;
          transition: color .3s ease
     }
     `;
const P = styled.p`
     &.text {
          margin: 18px 0 40px!important;
          max-width: 290px;
          min-height: 80px;
          color: #3d4f60;
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          @media only screen and (max-width: 600px){
               font-weight: 400;
               font-size: 16px!important;
               line-height: 26px;
          }
     }
     .invest &.text {
          max-width: 278px;
          font-size: 20px;
          line-height: 28px;
          font-weight: 400!important;
          margin: 0!important;
          margin-top: 2rem!important;
          color: #fed6f1!important;
          font-family: Eina01-Regular,sans-serif;
          @media only screen and (max-width: 600px) {
               font-size: 18px!important;
               line-height: 26px;
          }
          @media only screen and (max-width: 1024px) {
               max-width: unset;
          }
     }
     .active &.text {
          color: #fff;
          transition: color .3s ease;
     }
     `;
const Span = styled.span`
     position: relative;
     background-size: 100% 0%;
     transition: background-size .3s ease;
`;
export default SavingsBox;