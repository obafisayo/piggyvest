import React from "react";
import styled from "styled-components";
import FlexnairaHeader from "./flexnairaHeader/FlexnairaHeader";
import FlexInfo from "./flexInfo/FlexInfo";
import FlexnairaInteract from "./flexInteract/flexInteract";

function Flexnaira() {
    return (
        <Div>
            <FlexnairaHeader />
            <FlexInfo />
            <FlexnairaInteract />
        </Div>
    );
};

const Div = styled.div`
`;
export default Flexnaira;