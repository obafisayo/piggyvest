import React from "react";
import styled from "styled-components";
import HomeHeader from "./HomeHeader/HomeHeader";
import Investment from "./Investment/Investment";
import Savings from "./Savings/Savings";
import OtherInvestment from "./OtherInvestment/OtherInvestment";
// import HomeSaver from "./HomeSaver/HomeSaver";
import Customer from "./customer/Customer";

function Home() {
    return (
        <Div>
            <HomeHeader />
            <Investment />
            <Savings />
            <OtherInvestment />
            {/* <HomeSaver /> */}
            <Customer />
        </Div>
    );
}

const Div = styled.div`
`;
export default Home;

