import React from "react";
import InteractDiv from "../../../../components/interactDiv/InteractDiv";
import Flexnaira from "../../../../assets/static/img/flexnaira-save4.png"
import { theme } from "../../../../globalStyles";

function FlexnairaInteract() {
    return (
        <InteractDiv title={"Stay prepared for life's emergencies"}
            img={`url(${Flexnaira})`}
            background={theme.palette.FLEXPINK}
        >
            Give your emergency funds a boost! We know that emergencies can happen anytime. 
            Building an emergency fund in Flex Naira helps you to stay ahead, 
            so you can avoid borrowing or extra financial burden when there is a crisis. 
            Best of all, you earn interests.
        </InteractDiv>
    );
};

export default FlexnairaInteract;
