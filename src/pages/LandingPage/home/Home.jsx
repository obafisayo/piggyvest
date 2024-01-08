import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import Investment from "./Investment/Investment";
import Savings from "./Savings/Savings";
import OtherInvestment from "./OtherInvestment/OtherInvestment";
import HomeSaver from "./HomeSaver/HomeSaver";

function Home() {
    return (
        <div>
            <HomeHeader />
            <Investment />
            <Savings />
            <OtherInvestment />
            <HomeSaver />
        </div>
    );
}
export default Home;
