import React from "react";
import PageInfo from "../../../../components/pageInfo/PageInfo";
import { infoConfig } from "./infoConfig";
import { theme } from "../../../../globalStyles";

function InvestInfo() {
    return(
        <PageInfo title={"Simple investments with great returns"}
            config={infoConfig}
            color={theme.palette.INVESTPURPLE}
        >
            Investments are made readily accessible to everyone
        </PageInfo>
    );
};

export default InvestInfo;
