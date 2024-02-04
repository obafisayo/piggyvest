import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";
import { InternalNavlink } from "../../../../components/link/Link";
import Img from "../../../../components/img/Img";
import { brandsImgConfig } from "../brands/brandsImgConfig";
import EnteredDiv from "../../../../components/Entereddiv/EnteredDiv";

function Brand({style}) {
     const [myStyle, setMyStyle] = useState(false);
     const [myStyle1, setMyStyle1] = useState(false);
     const [myStyle2, setMyStyle2] = useState(false);
     const [myStyle3, setMyStyle3] = useState(false);
     const [myStyle4, setMyStyle4] = useState(false);
     const [myStyle5, setMyStyle5] = useState(false);
     const style1 = {
          transition: "all 0.5s ease-in",
          opacity: myStyle1 || myStyle? "1" : "0",
          visibility: myStyle1 ? "visible" : "hidden"
     }
     const style2 = {
          transition: "all 0.5s ease-in",
          opacity: myStyle2 ? "1" : "0",
          visibility: myStyle2 ? "visible" : "hidden"
     }
     const style3 = {
          transition: "all 0.5s ease-in",
          opacity: myStyle3 ? "1" : "0",
          visibility: myStyle3 ? "visible" : "hidden"
     }
     const style4 = {
          transition: "all 0.5s ease-in",
          opacity: myStyle4 ? "1" : "0",
          visibility: myStyle4 ? "visible" : "hidden"
     }
     const style5 = {
          transition: "all 0.5s ease-in",
          opacity: myStyle5 ? "1" : "0",
          visibility: myStyle5 ? "visible" : "hidden"
     }
     const allstyle = [style1, style2, style3, style3, style4, style5]
     function handleStyle() {
          setMyStyle(false);
          setTimeout(() => {
               setMyStyle1(true);
               setTimeout(() => {
                    setMyStyle2(true);
                    setTimeout(() => {
                         setMyStyle3(true);
                         setTimeout(() => {
                              setMyStyle4(true);
                              setTimeout(() => {
                                   setMyStyle5(true);
                              }, 250);
                         }, 250);
                    }, 250);
               }, 250);
          }, 250);
      }
     return (
          <StyledSection className="featured">
               <Container>
                    <Div className="row">
                         <Div className="title" style={style}>
                              <H4>As featured in</H4>
                         </Div>
                         <EnteredDiv threshold={"0.5"} whenDivIsentered={handleStyle} classname="brands">
                              {brandsImgConfig.map((brand, index) => (
                                   <InternalNavlink to={brand.to} key={index}>
                                        <Img src={brand.img} alt={"brand"} 
                                             className={brand.class} styles={allstyle[index]}
                                        />
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
