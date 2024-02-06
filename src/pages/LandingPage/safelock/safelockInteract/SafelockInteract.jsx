import React from "react";
import InteractDiv from "../../../../components/interactDiv/InteractDiv";
import SafelockImg from "../../../../assets/static/img/safe-save4.png"
import { theme } from "../../../../globalStyles";

function SafelockInteract() {
    return (
        <InteractDiv title={"Avoid temptations & lock your money."}
            img={`url(${SafelockImg})`}
            background={theme.palette.SAFEBLUE}
        >
            Safelock allows you to set money aside for a fixed period of 
            time without having access to it until maturity. 
            It’s like having your own custom fixed deposit.
        </InteractDiv>
    );
};

export default SafelockInteract;
