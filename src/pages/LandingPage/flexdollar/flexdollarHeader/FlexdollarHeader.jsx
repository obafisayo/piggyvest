import React from "react";
import PageHeader from "../../../../components/pageheader/PageHeader";
import { theme } from "../../../../globalStyles";
import Flexdollarlogo from "../../../../assets/static/img/flexdollar_label.png";
import Floating_Flexdollar from "../../../../assets/static/img/floating_flexdollar.png";
import Flexdollar_header from "../../../../assets/static/img/flexdollar_header.png"
import { StyleSheetManager } from "styled-components";
function FlexdollarHeader() {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "background"} >
            <PageHeader
                staticImg={Flexdollar_header}
                classname={"other-header white"}
                moving
                movingImg={Floating_Flexdollar}
                moving_class={"static"}
                background={theme.palette.FLEXBLACK}
                label={"Dollar Savings"}
                label_img={Flexdollarlogo}
                title={"Flex Dollar"}
            >
                Save and grow your money in foreign currencies such as Dollars.
            </PageHeader>
        </StyleSheetManager>
    );
}
export default FlexdollarHeader;
