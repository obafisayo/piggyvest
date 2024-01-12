import React from "react";
import styled from "styled-components";

function Img({src, alt, width, height, className, styles}) {
     return (
          <Image style={styles} className={className? className : ''} width={width} height={height} src={src} alt={alt} />
     );
}

const Image = styled.img`
     &.static-phone {
          width: 450px;
          position: relative;
          bottom: 0px;
          z-index: 11;
          right: 3px;
          @media only screen and (max-width: 500px) {
              width: 300px;
              position: relative;
              bottom: -21px;
          }
          @media only screen and (max-width: 992px) {
               right: 0;
               bottom: -15px;
          }
     }

     &.customer-img {
          width: 450px;
          @media only screen and (max-width: 600px) {
               width: 350px;
               max-width: 90vw;
               display: block;
               margin: 0 auto;
          }
     }
     &.brand_image1,
     &.brand_image2,
     &.brand_image3,
     &.brand_image5 {
          width: 160px;
          height: auto;
          @media only screen and (max-width: 600px) {
               width: 149px;
               height: auto;
          }
     }
     &.brand_image4,
     &.brand_image6 {
          width: 160px;
          height: 40px;
          @media only screen and (max-width: 600px) {
               width: 149px;
          }
     }
     &.img-card {
          width: 100px;
          position: absolute;
          visibility: hidden;
          transition: all .5s ease;
          bottom: 0;
          right: -100px;
     }
     .active &.img-card {
          width: 250px;
          visibility: visible;
          bottom: 0;
          right: 20px;
          @media only screen and (max-width: 600px) {
               width: 170px;
               right: 16px;
          }
     }
     .invest &.img-card {
          width: 437px;
          position: absolute;
          right: 4rem;
          @media only screen and (max-width: 1024px) {
               all: unset;
               width: 400px;
               position: relative;
               bottom: -37px;
          }
          @media only screen and (max-width: 600px) {
               all: unset;
               width: 80vw;
               position: relative;
               bottom: -37px;
          }
     }
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