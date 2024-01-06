import {
     PIGGYBANK,
     SAFELOCK,
     TARGETSAVINGS,
     FLEXNAIRA,
     FLEXDOLLAR
} from "../../../../routes/routeConstants";

import PiggybankImg from "../../../../assets/static/img/piggybank_phone.avif";
import SafelockImg from "../../../../assets/static/img/safelock_phone.avif";
import TargetsavingsImg from "../../../../assets/static/img/targetsavings_phone.avif";
import FlexnairaImg from "../../../../assets/static/img/flexNaira_phone.avif"
import FlexdollarImg from "../../../../assets/static/img/flexdollar_phone.avif"

export const savingsBoxConfig = [
     {
          path: PIGGYBANK,
          title: "Automated Savings",
          text: "Build a dedicated savings faster on your terms, automatically or manually.",
          subtitle: "Piggybank",
          color: "rgb(0, 51, 153)",
          img: PiggybankImg,
          class: "piggybank active"
     },
     {
          path: SAFELOCK,
          title: "Fixed Savings",
          text: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
          subtitle: "Safelock",
          color: "#2295f2",
          img: SafelockImg,
          class: "safelock active"
     },
     {
          path: TARGETSAVINGS,
          title: "Goal-oriented Savings",
          text: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
          subtitle: "Target Savings",
          color: "#39c277",
          img: TargetsavingsImg,
          class: "targetsavings active"
     },
     {
          path: FLEXNAIRA,
          title: "Flex Naira",
          text: " Save, transfer, manage, organise, and withdraw your money at any time.",
          subtitle: "Flex Naira",
          color: "#e5489b",
          img: FlexnairaImg,
          class: "flexnaira active"
     },
     {
          path: FLEXDOLLAR,
          title: "Flex Dollar",
          text: "Save and grow your money in foreign currencies such as Dollars.",
          subtitle: "Flex Dollar",
          color: "#0c1825",
          img: FlexdollarImg,
          class: "flexdollar active"
     }
];
