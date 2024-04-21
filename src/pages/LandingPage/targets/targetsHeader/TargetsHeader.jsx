import React from "react";
import PageHeader from "../../../../components/pageheader/PageHeader";
import { theme } from "../../../../globalStyles";
import Targetlogo from "../../../../assets/static/img/target_label.png";
import Floating_Target from "../../../../assets/static/img/floating_target.png";
import Target_header from "../../../../assets/static/img/target_header.png"
import { StyleSheetManager } from "styled-components";
function SafelockHeader() {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "background"} >
            <PageHeader
                staticImg={Target_header}
                classname={"other-header"}
                moving
                movingImg={Floating_Target}
                moving_class={"static"}
                background={theme.palette.TARGETGREEN}
                label={"Goal-oriented Savings"}
                label_img={Targetlogo}
                title={"Target Savings"}
            >
                Reach all your unique savings goals individually, or as a
                group. Earn up to 8% p.a.
            </PageHeader>
        </StyleSheetManager>
    );
}
export default SafelockHeader;
