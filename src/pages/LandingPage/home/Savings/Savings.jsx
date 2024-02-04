import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../../../../components/container/Container";
import TextCard from "../../../../components/TextCard/TextCard";
import SavingsBox from "../../../../components/savingsBox/SavingsBox";
import { savingsBoxConfig } from "./savingBoxConfig";

function Savings() {
     const [toggleState, setToggleState] = useState([true, false, false, false, false]);

     useEffect(() => {
     function toggleActiveClass() {
          if (toggleState[0]) setToggleState([false, true, false, false, false])
          if (toggleState[1]) setToggleState([false, false, true, false, false])
          if (toggleState[2]) setToggleState([false, false, false, true, false])
          if (toggleState[3]) setToggleState([false, false, false, false, true])
          if (toggleState[4]) setToggleState([true, false, false, false, false])
     }
     const intervalRef = setInterval(toggleActiveClass, 3000);
     return () => clearInterval(intervalRef);
     }, [toggleState]);

     return (
          <StyledSection id="save">
               <Container>
               <Div className="box-container">
               <TextCard paragraph dynamicEl={"h3"} dystyle
                    classname={"savings content"}
                    title={"5 ways to build your savings"}>
                    Earn 5%-15% when you save with any of these PiggyVest plans.
               </TextCard>
               {savingsBoxConfig.map((box, index) => (
                    <SavingsBox key={index}
                         title={box.title}
                         img={box.img}
                         subtitle={box.subtitle}
                         color={box.color}
                         path={box.path}
                         classname={toggleState[index] ? box.class : "savings"}
                    >
                    {box.text}
                    </SavingsBox>
               ))}
               </Div>
               </Container>
          </StyledSection>
     );
}

const StyledSection = styled.section`
  padding: 60px 16px 100px;
  @media only screen and (max-width: 992px) {
    padding-bottom: 50px;
  }
`;

const Div = styled.div`
  &.box-container {
    display: flex;
    align-items: center;
    grid-gap: 2rem;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 1700px;
    justify-content: center;
  }
`;

export default Savings;
