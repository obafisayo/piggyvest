import React, { useState } from "react";
import styled from "styled-components";
import Container from "../container/Container";
import TextCard from "../TextCard/TextCard";
import MovingImage from "../movingImage/MovingImage";
import Img from "../img/Img";
import EnteredDiv from "../Entereddiv/EnteredDiv";

function PageHeader({classname, title,
     moving, movingImg,
     smallImg, staticImg,
     children, background,
     label, label_img, 
     moving_class
}) {
     const [entered, setEntered] = useState(false);
     const style = {
          opacity: entered? "1" : "0",
          visibility: entered? "inherit" : "none",
          transition: "all 0.5s ease-in"
     }
     function handleEnter() {
          setEntered(true)
     }
     return (
          <StyledSection className={`header backgroundNcolor ${classname}`} background={background}>
               <Container classname={`container ${classname}`}>
                    <TextCard button h1style pstyle paragraph header1 classname={classname}
                         label={label}
                         label_img={label_img}
                         title={title}>
                              {children}
                    </TextCard>
                    {moving && <MovingImage movingImg={movingImg} smallImg={smallImg} classname={moving_class}/>}
                    {staticImg && 
                         <EnteredDiv threshold={0.5} whenDivIsentered={handleEnter} classname={"static"}>
                              <Img src={staticImg} styles={style} className={"static-phone"}/>
                         </EnteredDiv>
                    }
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
     &.home-header {
          padding: 0;
          @media only screen and (max-width: 600px) {
               padding-bottom: 20px;
          }
     }
     &.other-header {
          padding: 0;
          @media only screen and (max-width: 600px) {
               padding-bottom: 13px;
          }
     }
     &.other-header .container {
          padding: 180px 0 0;
          @media only screen and (max-width: 992px) {
               padding: 0!important;
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