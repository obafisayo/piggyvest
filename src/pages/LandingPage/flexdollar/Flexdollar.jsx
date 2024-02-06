import React from "react";
import styled from "styled-components";
import FlexdollarHeader from "./flexdollarHeader/FlexdollarHeader";
import FlexdollarInfo from "./flexdollarInfo/FlexdollarInfo";
import FlexdollarInteract from "./flexdollarInteract/FlexdollarInteract";

function Flexdollar() {
    return (
        <Div>
            <FlexdollarHeader />
            <FlexdollarInfo />
            <FlexdollarInteract />
        </Div>
    );
};

const Div = styled.div`
`;
export default Flexdollar;