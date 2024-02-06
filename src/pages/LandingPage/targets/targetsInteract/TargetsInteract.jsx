import React from "react";
import InteractDiv from "../../../../components/interactDiv/InteractDiv";
import TargetImg from "../../../../assets/static/img/target-save4.png"
import { theme } from "../../../../globalStyles";

function TargetInteract() {
    return (
        <InteractDiv title={"Saving ‘just because’ is great, but saving for something special is a lot of fun."}
            img={`url(${TargetImg})`}
            background={theme.palette.TARGETGREEN}
            classname={"target"}
        >
            Got a savings goal in mind? We’ll help you reach it! Saving for a new phone? Check. 
            Dad’s surprise birthday? Check. A new car, special vacation? Check and check. 
            Target Savings helps you reach all your savings goals easily and faster.
        </InteractDiv>
    );
};

export default TargetInteract;
