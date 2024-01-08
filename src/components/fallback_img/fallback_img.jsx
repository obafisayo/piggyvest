import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Img from "../img/Img";
import DownloadButton from "../download_button/Download_btn";

function FallbackImg({img}) {
     return (
          <Section>
               <Container>
                    <Div className="box">
                         <Div className="left">
                              <Img src={img} alt={"customer-img"} className={"customer-img"}/>
                         </Div>
                         <Div className="right">
                              <Div className="content">
                                   <H4>Join 4+ million people who save and invest with us</H4>
                                   <DownloadButton classname={"white"} whyte/>
                              </Div>
                         </Div>
                    </Div>
               </Container>
          </Section>
     );
}
const Section = styled.section`
     padding: 100px 16px;
     @media only screen and (max-width: 600px) {
          padding: 0 1rem 4rem;
          margin-bottom: 0;
          margin-top: 4rem;
     }
`;
const Div = styled.div`
     &.content {
          max-width: 420px;
          @media only screen and (max-width: 992px) {
               margin-left: auto!important;
               margin-right: auto!important;
          }
     }
     &.box {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
          @media only screen and (max-width: 1024px) {
               margin-left: 0;
               margin-right: 0;
          }
     }
     &.left {
          flex: 0 0 43%;
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          @media only screen and (max-width: 600px) {
               flex: unset;
               padding: 0;
          }
          @media only screen and (max-width: 992px) {
               order: 2;
               text-align: left;
          }
     }
     &.right {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          @media only screen and (min-width: 992px) {
               flex: 0 0 55%;
               max-width: 0 0 55%;
          }
          @media only screen and (max-width: 992px) {
               margin-bottom: 70px;
          }
     }
`;
const H4 = styled.h4`
     width: 500px;
     font-weight: 700;
     @media only screen and (max-width: 600px) {
          width: unset;
          font-weight: 700;
          font-size: 30px!important;
          line-height: 35px;
     }
`;
export default FallbackImg;