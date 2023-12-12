import React from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";
import TextCard from "../../../../components/TextCard/TextCard";
import MovingImage from "../../../../components/movingImage/MovingImage";

function HomeHeader() {
     return (
          <StyledSection className="header header-home">
               <Container classname="container">
                    <TextCard button title={"The Better Way to Save & Invest"}
                    text={"Piggyvest helps over 4 million customers achieve     \
                         their financial goals by helping them save and         \
                         invest with ease."}
                    />
                    <MovingImage />
               </Container>
          </StyledSection>
     );
};

const StyledSection = styled.section`
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
export default HomeHeader;