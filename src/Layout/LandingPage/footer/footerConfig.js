import {ABOUT, BLOG, CURRENTYEAR, FAQS, FLEXDOLLAR, FLEXNAIRA, INVEST,
        PIGGYBANK,
        PRIVACY,
        SAFELOCK,
        SECURITY,
        TARGETSAVINGS,
        TERMS
} from "../../../routes/routeConstants";
import facebook from "../../../assets/static/svg/facebook.svg"
import twitter from "../../../assets/static/svg/twitter.svg"
import instagram from "../../../assets/static/svg/instagram.svg"
import tiktok from "../../../assets/static/svg/tiktok.svg"
import youtube from "../../../assets/static/svg/youtube.svg"

export const ProductConfig = [
    {
        title: "Piggybank",
        to: PIGGYBANK
    },
    {
        title: "Invest",
        to: INVEST
    },
    {
        title: "Safelock",
        to: SAFELOCK
    },
    {
        title: "Target Savings",
        to: TARGETSAVINGS
    },
    {
        title: "Flex Naira",
        to: FLEXNAIRA
    },
    {
        title: "Flex Dollar",
        to: FLEXDOLLAR
    }
];

export const companyConfig = [
    {
        title: "About",
        to: ABOUT
    },
    {
        title: "FAQs",
        to: FAQS
    },
    {
        title: "Blog",
        to: BLOG
    },
];

export const legalConfig = [
    {
        title: "Terms",
        to: TERMS
    },
    {
        title: "Privacy",
        to: PRIVACY
    },
    {
        title: "Security",
        to: SECURITY
    }
];

export const socialConfig = [
    {
        to: "https://www.facebook.com/PiggyBankNG/",
        src: facebook
    },
    {
        to: "https://www.instagram.com/piggybankng/",
        src: instagram
    },
    {
        to: "https://mobile.twitter.com/PiggyBankNG/",
        src: twitter
    },
    {
        to: "https://www.tiktok.com/@piggybank_ng?_t=8cwbLU1TTcs&amp;_r=1",
        src: tiktok
    },
    {
        to: "https://www.youtube.com/@PiggyVest",
        src: youtube
    }
];

export const addressConfig = [
    {
        title: "Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.",
        to: "https://goo.gl/maps/NpjEYTjJuzxCUM9X7"
    },
    {
        title: "contact@piggyvest.com",
        to: "mailto:contact@psiggyvest.com"
    },
    {
        title: "+234 700 933 933 933",
        to: "tel:+234700933933933"
    }
];
export const aboutConfig = [
    {
        text: "Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 7 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.",
        class: "about__body"
    },
    {
        text: " PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria. ",
        class: "about__sec-body"
    },
    {
        text: `2016 - ${CURRENTYEAR} PiggyTech Global Limited - RC 1405222`,
        class: "primary"
    }
]
