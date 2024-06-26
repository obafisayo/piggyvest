import React from "react";
import InteractDiv from "../../../../components/interactDiv/InteractDiv";
import Piggysave4 from "../../../../assets/static/img/piggy-save4.png"
import { theme } from "../../../../globalStyles";
import { StyleSheetManager } from "styled-components";

function PiggyInteract() {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "background"}>
            <InteractDiv title={"Build your savings small small!"}
                img={`url(${Piggysave4})`}
                background={theme.palette.PIGGYBLUE}
            >
                With Piggybank, you can save periodically, automatically or manually. 
                You can also save as you go, on your own terms. 
                You’re the boss of your savings, choose how you want to save.
            </InteractDiv>
        </StyleSheetManager>
    );
};

export default PiggyInteract;
