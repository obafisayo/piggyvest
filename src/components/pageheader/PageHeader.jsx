import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import TextCard from "../TextCard/TextCard";
import MovingImage from "../movingImage/MovingImage";
import Img from "../img/Img";

function PageHeader({title, moving, movingImg, smallImg, staticImg, children, background, label, label_img, moving_class}) {
     const style = {
          opacity: "1",
          visibility: "inherit"
     }
     return (
          <StyledSection className="header header-home backgroundNcolor" background={background}>
               <Container classname="container">
                    <TextCard button h1style pstyle paragraph header1 classname={"home-header"}
                         label={label}
                         label_img={label_img}
                         title={title}>
                              {children}
                    </TextCard>
                    {moving && <MovingImage movingImg={movingImg} smallImg={smallImg} classname={moving_class}/>}
                    {staticImg && <Img src={staticImg} styles={style} className={"static-phone"}/>}
               </Container>
          </StyledSection>
     );
};

const StyledSection = styled.section`
     &.backgroundNcolor {
          background: ${({background}) => background || ''};
          color: ${({background}) => background? "white!important" : ''};
          h1 {
               color: ${({background}) => background? "white!important" : ''};
          }
     }
     &.header {
          padding: 170px 16px 0;
          overflow: hidden;
          position: relative;
          @media only screen and (max-width: 992px) {
               padding-top: 200px!important;
               padding-bottom: 10px;
          }
     }
     &.header-home {
          padding: 0;
          @media only screen and (max-width: 600px) {
               padding-bottom: 20px;
          }
     }
     .container {
          padding: 190px 0 100px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          @media only screen and (max-width: 1200px) {
               justify-content: center;
          }
          @media only screen and (max-width: 992px) {
               padding: 0 0 100px;
          }
          @media only screen and (max-width: 600px) {
               height: fit-content;
               grid-gap: 5rem;
               gap: 5rem;
               padding-bottom: unset;
               width: 100%;
               justify-content: center;
          }
     }
`;
export default PageHeader;