import React from "react";
import styled from "styled-components";
import PiggyHeader from "./piggyHeader/PiggyHeader";
import PiggyInfo from "./piggyInfo/PiggyInfo";
import PiggyInteract from "./piggyInteract/PiggyInteract";

function Piggybank() {
    return (
        <Div>
            <PiggyHeader />
            <PiggyInfo />
            <PiggyInteract />
        </Div>
    );
};

const Div = styled.div`
    
`;
export default Piggybank;