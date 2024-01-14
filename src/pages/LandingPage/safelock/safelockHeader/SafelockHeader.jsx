import React from "react";
import PageHeader from "../../../../components/pageheader/PageHeader";
import { theme } from "../../../../globalStyles";
import Safelogo from "../../../../assets/static/img/safelock_label.png";
import Floating_Safe from "../../../../assets/static/img/floating_safelock.png";
import Safelock_header from "../../../../assets/static/img/safelock_header.png"
function SafelockHeader() {
    return (
        <PageHeader
            staticImg={Safelock_header}
            classname={"other-header"}
            moving
            movingImg={Floating_Safe}
            moving_class={"static"}
            background={theme.palette.SAFEBLUE}
            label={"Fixed Savings"}
            label_img={Safelogo}
            title={"Safelock"}
        >
            Lock funds away for a fixed period of time to avoid spending temptation. Earn up to 12.5% p.a. paid upfront.
        </PageHeader>
    );
}
export default SafelockHeader;
