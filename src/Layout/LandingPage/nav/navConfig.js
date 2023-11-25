import {
     SAVE,
     INVEST,
     STORIES,
     FAQS,
     RESOURCE     
} from "../../../routes/routeConstants";

export const navConfig = [
     {
          title: "Save",
          path: SAVE,
          ref: "saveref"
     },
     {
          title: "Invest",
          path: INVEST,
     },
     {
          title: "Stories",
          path: STORIES,
     },
     {
          title: "FAQs",
          path: FAQS
     },
     {
          title: "Resources",
          path: RESOURCE,
          ref: "resourceref"
     }
];