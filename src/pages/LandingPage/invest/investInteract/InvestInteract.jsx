import React from "react";
import InteractDiv from "../../../../components/interactDiv/InteractDiv";
import InvestImg from "../../../../assets/static/img/invest-save4.png"
import { theme } from "../../../../globalStyles";

function InvestInteract() {
    return (
        <InteractDiv title={"We’ve made it easier for anyone to get started."}
            img={`url(${InvestImg})`}
            background={theme.palette.INVESTPURPLE}
        >
            Finally, you can access pre-vetted low-medium risk primary and secondary investment 
            opportunities easily with any amount you have. 
            No hidden fees/charges. 
            Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.
        </InteractDiv>
    );
};

export default InvestInteract;
