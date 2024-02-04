import React from "react";
import styled from "styled-components";
import PiggyHeader from "./piggyHeader/PiggyHeader";
import PiggyInfo from "./piggyInfo/PiggyInfo";

function Piggybank() {
    return (
        <Div>
            <PiggyHeader />
            <PiggyInfo />
        </Div>
    );
};

const Div = styled.div`
    
`;
export default Piggybank;