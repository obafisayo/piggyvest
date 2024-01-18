import React from "react";
import PageHeader from "../../../../components/pageheader/PageHeader";
import { theme } from "../../../../globalStyles";
import Flexnairalogo from "../../../../assets/static/img/flexNaira-label.png";
import Floating_Flexnaira from "../../../../assets/static/img/floating_flexnaira.png";
import Flexnaira_header from "../../../../assets/static/img/flexNaira_header.png"
import { StyleSheetManager } from "styled-components";
function FlexnairaHeader() {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "background"} >
            <PageHeader
                staticImg={Flexnaira_header}
                classname={"other-header"}
                moving
                movingImg={Floating_Flexnaira}
                moving_class={"static"}
                background={theme.palette.FLEXPINK}
                label={"Flexible Savings"}
                label_img={Flexnairalogo}
                title={"Flex Naira"}
            >
                Flexible savings for life's emergencies. Free transfers and withdrawals. Earn up to 8% p.a.
            </PageHeader>
        </StyleSheetManager>
    );
}
export default FlexnairaHeader;
