import React from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";
import { InternalNavlink } from "../../../../components/link/Link";
import Img from "../../../../components/img/Img";
import { brandsImgConfig } from "../brands/brandsImgConfig";

function Brand() {
     const style = {
          opacity: "1",
          visibility: "inherit",
          transform: "translate(0px, 0px)",
     }
     return (
          <StyledSection className="featured">
               <Container>
                    <Div className="row">
                         <Div className="title" style={style}>
                              <H4>As featured in</H4>
                         </Div>
                         <Div className="brands">
                              {brandsImgConfig.map((brand) => (
                                   <InternalNavlink to={brand.to}>
                                        <Img src={brand.img} alt={"brand"} className={brand.class}/>
                                   </InternalNavlink>
                              ))}
                         </Div>
                    </Div>
               </Container>
          </StyledSection>
     );
};

const StyledSection = styled.section`
     background: linear-gradient(180deg,#f2f8f4,#fff 33.01%);
     padding: 65px 16px;
`;
const Div = styled.div`
     &.row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
          align-items: center;
          flex-direction: column;
          @media only screen and (max-width: 1024px){
               margin-left: 0;
               margin-right: 0;
          }
     }
     &.title {
          @media only screen and (max-width: 992px) {
               padding: 0 0 1.5rem;
          }
     }
     &.brands {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-gap: 0 2rem;
          gap: 0 2rem;
          flex-wrap: wrap;
          @media only screen and (max-width: 600px) {
               grid-gap: 2rem;
               gap: 2rem;
          }
     }
`;
const H4 = styled.h4`
     font-size: 33px;
     line-height: 41.21px;
     @media only screen and (max-width: 992px) {
          font-size: 28px;
          line-height: 36px;
     }
`;
export default Brand;
