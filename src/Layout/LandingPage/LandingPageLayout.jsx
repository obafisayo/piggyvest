import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./footer/Footer";
import { Header } from "./header/Header";
import Customer from "./customer/Customers";

function LandingPageLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Customer />
            <Footer />
        </>
    );
};
export default LandingPageLayout;
