import React from "react";
import PageInfo from "../../../../components/pageInfo/PageInfo";
import { infoConfig } from "./infoConfig";
import { theme } from "../../../../globalStyles";

function FlexInfo() {
    return(
        <PageInfo title={"Be better prepared for emergencies"}
            config={infoConfig}
            color={theme.palette.FLEXPINK}
        >
            Building an emergency fund helps hedge against life’s risks and can help reduce frivolous spending.
        </PageInfo>
    );
};

export default FlexInfo;
