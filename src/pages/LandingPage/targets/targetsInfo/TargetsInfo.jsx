import React from "react";
import PageInfo from "../../../../components/pageInfo/PageInfo";
import { infoConfig } from "./infoConfig";
import { theme } from "../../../../globalStyles";

function TargetsInfo() {
    return(
        <PageInfo title={"Save towards multiple goals"}
            config={infoConfig}
            color={theme.palette.TARGETGREEN}
        >
            Target Savings helps you get there faster. 
            You can even team up with others to reach a collective target.
        </PageInfo>
    );
};

export default TargetsInfo;
