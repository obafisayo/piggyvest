import {
     PIGGYBANK,
     TARGETSAVINGS,
     SAFELOCK,
     FLEXDOLLAR,
     FLEXNAIRA
} from "../../../../routes/routeConstants";

import Piggylogo from "../../../../assets/static/img/piggybank-icon.png";
import SafeLogo from "../../../../assets/static/img/safelock-icon.png";
import TargetLogo from "../../../../assets/static/img/targets-icon.png";
import FlexNairaLogo from "../../../../assets/static/img/flex-naira-icon.png";
import FlexDollarLogo from "../../../../assets/static/img/flex-dollar-icon.png";

export const saveConfig = [
     {
          title: "Piggybank",
          subtitle: "Automated Savings",
          path: PIGGYBANK,
          class: "piggy dropdown",
          logo: Piggylogo
     },
     {
          title: "Safelock",
          subtitle: "Fixed Savings",
          path: SAFELOCK,
          class: "safe dropdown",
          logo: SafeLogo
     },
     {
          title: "Target Savings",
          subtitle: "Goal-oriented Savings",
          path: TARGETSAVINGS,
          class: "target dropdown",
          logo: TargetLogo
     },
     {
          title: "Flex Naira",
          subtitle: "Flexible Savings",
          path: FLEXNAIRA,
          class: "naira dropdown",
          logo: FlexNairaLogo
     },
     {
          title: "Flex Dollar",
          subtitle: "Dollar Savings",
          path: FLEXDOLLAR,
          class: "dropdown",
          logo: FlexDollarLogo
     }
]