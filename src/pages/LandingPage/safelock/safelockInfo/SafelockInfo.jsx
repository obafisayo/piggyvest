import React from "react";
import PageInfo from "../../../../components/pageInfo/PageInfo";
import { infoConfig } from "./infoConfig";
import { theme } from "../../../../globalStyles";

function SafelockInfo() {
    return(
        <PageInfo title={"Stay disciplined and avoid temptation"}
            config={infoConfig}
            color={theme.palette.SAFEBLUE}
        >
            Lock funds to avoid temptations. Earn your interest upfront and paid instantly.
        </PageInfo>
    );
};

export default SafelockInfo;
