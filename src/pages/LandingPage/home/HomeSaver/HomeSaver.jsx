import React from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";

function HomeSaver() {
     const style = {
          translate: "none",
          rotate: "none",
          scale: "none",
          opacity: "1",
          visibility: "inherit",
          transform: "translate(0px, 0px)"
     }
     return (
          <StyledSection>
               <Container>
                    <H2 className="title" style={style}>
                         Meet Our Saver of the Month
                    </H2>
                    <P className="text" style={style}>
                         Every month, we shine a spotlight on one saver, 
                         asking them about their savings culture and how 
                         piggyvest has helped them.
                    </P>
                    <Div className="home-saver__img">
                         <Iframe className="frame" title="youtube-ideo"
                              src="https://www.youtube.com/embed/8XzCzC9pFGM?autoplay=1&amp;mute=1"
                         >
                         </Iframe>
                    </Div>
               </Container>
          </StyledSection>
     );
};

const StyledSection = styled.section`
     max-width: 811px;
     margin: 0 auto;
     text-align: center;
     letter-spacing: -.03em;
     padding: 10rem 0 4rem;
     position: relative;
     @media only screen and (max-width: 600px) {
          padding: 6rem 1rem 0;
          margin-bottom: 0;
     }
`;
const H2 = styled.h2`
     &.title {
          font-size: 48px;
          @media only screen and (max-width: 600px) {
               font-size: 30px!important;
               line-height: 35px;
          }
     }
`;
const P = styled.p`
     &.text {
          font-size: 24px;
          line-height: 33px;
          font-weight: 400!important;
          margin-top: 10px;
          text-align: center;
          @media only screen and (max-width: 600px) {
               font-size: 16px!important;
               line-height: 26px;
          }
     }
`;
const Div = styled.div`
     &.home-saver__img {
          margin-top: 80px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          @media only screen and (max-width: 600px) {
               margin: 1.5rem auto 0;
          }
     }
`;
const Iframe = styled.iframe`
     .home-saver__img> &.frame {
          object-fit: cover;
          width: 100%;
          border: 10px solid #fff;
          border-radius: 24px;
          min-height: 465px;
          margin-bottom: 2rem;
          @media only screen and (max-width: 600px) {
               margin-bottom: 0;
          }
     }
`;
export default HomeSaver;