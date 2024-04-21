import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";
import { InternalNavlink } from "../../../../components/link/Link";
import Img from "../../../../components/img/Img";
import { brandsImgConfig } from "../brands/brandsImgConfig";
import EnteredDiv from "../../../../components/Entereddiv/EnteredDiv";
import DisplayStyles from "../../../../components/displayStyles/DisplayStyles";

function Brand({style}) {
     const [myStyle, setMyStyle] = useState(false);
     return (
          <StyledSection className="featured">
               <Container>
                    <Div className="row">
                         <Div className="title" style={style}>
                              <H4>As featured in</H4>
                         </Div>
                         <EnteredDiv threshold={"0.5"} whenDivIsentered={() => setMyStyle(true)} classname="brands">
                              {brandsImgConfig.map((brand, index) => (
                                   <InternalNavlink to={brand.to} key={index}>
                                        <DisplayStyles index={index} showStyle={myStyle}>
                                             <Img src={brand.img} alt={"brand"} 
                                                  className={brand.class}
                                             />
                                        </DisplayStyles>
                                   </InternalNavlink>
                              ))}
                         </EnteredDiv>
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
