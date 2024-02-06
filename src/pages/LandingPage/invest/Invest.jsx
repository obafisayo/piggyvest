import React from "react";
import styled from "styled-components";
import InvestHeader from "./investHeader/InvestHeader";
import InvestInfo from "./investInfo/InvestInfo";
import InvestInteract from "./investInteract/InvestInteract";

function Invest() {
    return (
        <Div>
            <InvestHeader />
            <InvestInfo />
            <InvestInteract />
        </Div>
    );
};

const Div = styled.div`
`;
export default Invest;