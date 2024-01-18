import React from "react";
import PageHeader from "../../../../components/pageheader/PageHeader";
import { theme } from "../../../../globalStyles";
import Floating_Invest from "../../../../assets/static/img/floating_invest.png";
import Invest_header from "../../../../assets/static/img/invest_header.png"
import { StyleSheetManager } from "styled-components";
function InvestHeader() {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "background"} >
            <PageHeader
                staticImg={Invest_header}
                classname={"other-header"}
                moving
                movingImg={Floating_Invest}
                moving_class={"static"}
                background={theme.palette.INVESTPURPLE}
                label={"Up to 35% returns"}
                label_img={Floating_Invest}
                title={"Invest on the go"}
            >
                Invest securely and confidently on the go.<br/>
                Up to 25% returns, 6-12 month duration.
            </PageHeader>
        </StyleSheetManager>
    );
}
export default InvestHeader;
