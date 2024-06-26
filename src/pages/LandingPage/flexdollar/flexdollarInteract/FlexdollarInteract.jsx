import React from "react";
import InteractDiv from "../../../../components/interactDiv/InteractDiv";
import FlexdollarImg from "../../../../assets/static/img/target-save4.png"
import { theme } from "../../../../globalStyles";
import { StyleSheetManager } from "styled-components";

function FlexdollarInteract() {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "background"}>
            <InteractDiv title={"Preserve the value of your money"}
                img={`url(${FlexdollarImg})`}
                background={theme.palette.FLEXBLACK}
            >
                One of the key elements in wealth management is preserving (and growing) the value of your savings. 
                In simple terms, this means not losing value on your savings. 
                Saving in foreign currencies like Dollars helps to hedge against that.
            </InteractDiv>
        </StyleSheetManager>
    );
};

export default FlexdollarInteract;
