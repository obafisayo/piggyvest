import React from "react";
import PageInfo from "../../../../components/pageInfo/PageInfo";
import { infoConfig } from "./infoConfig";
import { theme } from "../../../../globalStyles";

function PiggyInfo() {
    return(
        <PageInfo title={"Save without thinking about it."}
            config={infoConfig}
            color={theme.palette.PIGGYBLUE}
        >
            Enjoy automated savings, quick manual savings top up and competitive interest rates.
        </PageInfo>
    );
};

export default PiggyInfo;
