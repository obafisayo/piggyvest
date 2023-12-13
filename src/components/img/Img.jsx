import React from "react";
import styled from "styled-components";

function Img({src, alt, width, height, className, styles}) {
     return (
          <Image style={styles} className={className? className : ''} width={width} height={height} src={src} alt={alt} />
     );
}

const Image = styled.img`
     &.widNheight {
          width: 100%!important;
          height: auto!important;
     }
     &.headerImg {
          @media only screen and (max-width: 600px) {
               width: 330px;
               max-width: 85vw;
               min-height: unset;
          }
     }
     &.style {
          translate: none;
          rotate: none;
          scale: none;
          transition: all 0.5s ease-in;
     }
     &.icon {
          position: relative;
          top: 5.5px;
          margin-right: 5px;
     }
     &.play {
          top: 6.5px;
          margin-right: 2px;
     }
     &.rel-pos {
          position: relative;
     }
     &.absNwidth {
          position: absolute;
          width: 210px;
     }
     &.safe {
          top: 130px;
          left: -60px;
          @media only screen and (max-width: 600px) {
               top: 80px;
               left: -20px;
               width: 130px;
          }
     }
     &.target {
          top: 90px;
          right: -30px;
          @media only screen and (max-width: 600px) {
               top: 70px;
               right: -20px;
               width: 130px;
          }
     }
     &.flexBox {
          top: 330px;
          left: -60px;
          width: 200px;
          @media only screen and (max-width: 600px) {
               top: 204px;
               left: -20px;
               width: 130px;
          }
     }
     &.invest {
          top: 332px;
          right: -40px;
          @media only screen and (max-width: 600px) {
               top: 200px;
               right: -25px;
               width: 130px;
          }
     }
     &.piggy {
          bottom: -20px;
          left: 170px;
          width: 180px;
          @media only screen and (max-width: 600px) {
               bottom: -10px;
               left: 100px;
               width: 130px;
          }
     }
`;
export default Img;