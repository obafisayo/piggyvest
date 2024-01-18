import React from "react";
import PageHeader from "../../../../components/pageheader/PageHeader";
import Piggybank_header from "../../../../assets/static/img/piggybank_header.png"
import { theme } from "../../../../globalStyles";
import Piggylogo from "../../../../assets/static/svg/piggy-label.svg";
import Floating_Piggy from "../../../../assets/static/img/floating_piggy.png";
import { StyleSheetManager } from "styled-components";
function PiggyHeader() {
     return(
          <StyleSheetManager shouldForwardProp={(prop) => prop !== "background"} >
               <PageHeader 
                    staticImg={Piggybank_header}
                    classname={"other-header"}
                    moving
                    movingImg={Floating_Piggy}
                    moving_class={"static"}
                    background={theme.palette.PIGGYBLUE}
                    label={"Automated savings"}
                    label_img={Piggylogo}
                    title={"Piggybank"}
               >
                    Strict daily, weekly or monthly automatic savings. Earn up to 10% p.a.
               </PageHeader>
          </StyleSheetManager>
     );
};

export default PiggyHeader;
