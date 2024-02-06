import React from "react";
import PageInfo from "../../../../components/pageInfo/PageInfo";
import { infoConfig } from "./infoConfig";
import { theme } from "../../../../globalStyles";

function FlexdollarInfo() {
    return(
        <PageInfo title={"Preserve and grow your money"}
            config={infoConfig}
            color={theme.palette.FLEXBLACK}
        >
            Target Savings helps you get there faster. You can even team up with others to reach a collective target.
        </PageInfo>
    );
};

export default FlexdollarInfo;
