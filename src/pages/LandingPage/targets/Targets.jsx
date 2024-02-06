import React from "react";
import styled from "styled-components";
import TargetsHeader from "./targetsHeader/TargetsHeader";
import TargetsInfo from "./targetsInfo/TargetsInfo";
import TargetInteract from "./targetsInteract/TargetsInteract";

function Targets() {
    return (
        <Div>
            <TargetsHeader />
            <TargetsInfo />
            <TargetInteract />
        </Div>
    );
};

const Div = styled.div`
`;
export default Targets;