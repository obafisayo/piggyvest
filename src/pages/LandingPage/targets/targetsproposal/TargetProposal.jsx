import React from "react";
import ProposalDiv from "../../../../components/proposaldiv/ProposalDiv";
import { targetProposalConfig } from "./targetProposalConfig";

function TargetProposal() {
    return (
        <ProposalDiv title={"Recent Public Saving Challenges"}
            config={targetProposalConfig}
        />
    )
}

export default TargetProposal;
