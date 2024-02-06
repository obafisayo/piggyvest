import React from "react";
import styled from "styled-components";
import SafelockHeader from "./safelockHeader/SafelockHeader";
import SafelockInteract from "./safelockInteract/SafelockInteract";
import SafelockInfo from "./safelockInfo/SafelockInfo";

function Safelock() {
    return (
        <Div>
            <SafelockHeader />
            <SafelockInfo />
            <SafelockInteract />
        </Div>
    );
};

const Div = styled.div`
`;
export default Safelock;