import { Navigate, useRoutes } from "react-router-dom";

import Home from "../pages/LandingPage/home/Home";
import About from "../pages/LandingPage/about/About";
import Stories from "../pages/LandingPage/stories/Stories";
import Faq from "../pages/LandingPage/faq/Faq";
import Piggybank from "../pages/LandingPage/piggybank/Piggybank";
import Invest from "../pages/LandingPage/invest/Invest";
import Safelock from "../pages/LandingPage/safelock/Safelock";
import Target from "../pages/LandingPage/targets/Targets";
import Flexnaira from "../pages/LandingPage/flexnaira/Flexnaira";
import Flexdollar from "../pages/LandingPage/flexdollar/Flexdollar";
import Calculator from "../pages/LandingPage/calculator/Calculator";
import Ebook from "../pages/LandingPage/ebook/Ebook";
import Comic from "../pages/LandingPage/comic/Comic";
import Report from "../pages/LandingPage/report/Report";
import Newsletter from "../pages/LandingPage/newsletter/Newsletter";
import Terms from "../pages/LandingPage/terms/Terms";
import Privacy from "../pages/LandingPage/privacy/Privacy";
import Security from "../pages/LandingPage/security/Security";
import Signin from "../pages/AuthPage/Signin"
import CreateAcct from "../pages/AuthPage/CreateAcct"

import LandingPageLayout from "../Layout/LandingPage/LandingPageLayout";
import NotFound404 from "../pages/NotFound"

import {
    HOME,
    ABOUT,
    STORIES,
    FAQS,
    PIGGYBANK,
    INVEST,
    SAFELOCK,
    TARGETSAVINGS,
    FLEXDOLLAR,
    FLEXNAIRA,
    CALCULATOR,
    EBOOK,
    COMIC,
    REPORT,
    NEWSLETTER,
    TERMS,
    PRIVACY,
    SECURITY,
    ACCOUNT,
    SIGNUP,
    SIGNIN,
    SIGNUP_OTP,
    FORGOT_PASSWORD,
    NOTFOUND
} from "./routeConstants";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import ForgotPassword from "../pages/AuthPage/ForgotPassword";
import SignUpOTP from "../pages/AuthPage/SignUpOTP";

export default function Router() {
    return useRoutes([
        {
            path: HOME,
            element: <LandingPageLayout />,
            children: [
                {
                    path: HOME,
                    element: <Home />
                },
                {
                    path: ABOUT,
                    element: <About />
                },
                {
                    path: STORIES,
                    element: <Stories />
                },
                {
                    path: FAQS,
                    element: <Faq />
                },
                {
                    path: PIGGYBANK,
                    element: <Piggybank />
                },
                {
                    path: INVEST,
                    element: <Invest />
                },
                {
                    path: SAFELOCK,
                    element: <Safelock />
                },
                {
                    path: TARGETSAVINGS,
                    element: <Target />
                },
                {
                    path: FLEXNAIRA,
                    element: <Flexnaira />
                },
                {
                    path: FLEXDOLLAR,
                    element: <Flexdollar />
                },
                {
                    path: CALCULATOR,
                    element: <Calculator />
                },
                {
                    path: EBOOK,
                    element: <Ebook />
                },
                {
                    path: COMIC,
                    element: <Comic />
                },
                {
                    path: REPORT,
                    element: <Report />
                },
                {
                    path: NEWSLETTER,
                    element: <Newsletter />
                },
                {
                    path: TERMS,
                    element: <Terms />
                },
                {
                    path: PRIVACY,
                    element: <Privacy />
                },
                {
                    path: SECURITY,
                    element: <Security />
                }
            ]
        },
        {
            path: ACCOUNT,
            element: <AuthLayout />,
            children: [
                {
                    path: SIGNIN,
                    element: <Signin />
                },
                {
                    path: SIGNUP,
                    element: <CreateAcct />
                },
                {
                    path: FORGOT_PASSWORD,
                    element: <ForgotPassword />
                },
                {
                    path: SIGNUP_OTP,
                    element: <SignUpOTP />
                },
                {
                    path: NOTFOUND, element: <NotFound404 />
                },
                {
                    path: '*', element: <Navigate to={`/${NOTFOUND}`} replace />
                }
            ]
        },
        { path: '*', element: <NotFound404 /> }
    ]);
}