import React from "react";
import styled from "styled-components";
import TargetsHeader from "./targetsHeader/TargetsHeader";
import TargetsInfo from "./targetsInfo/TargetsInfo";
import TargetInteract from "./targetsInteract/TargetsInteract";
import TargetProposal from "./targetsproposal/TargetProposal";

function Targets() {
    return (
        <Div>
            <TargetsHeader />
            <TargetsInfo />
            <TargetInteract />
            <TargetProposal />
        </Div>
    );
};

const Div = styled.div`
`;
export default Targets;