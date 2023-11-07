import {
     REPORT,
     COMIC,
     CALCULATOR,
     NEWSLETTER,
     EBOOK,
     BLOG
} from "../../../../routes/routeConstants";

import BlogIcon from "../../../../assets/static/svg/blog-icon.svg";
import ReportIcon from "../../../../assets/static/svg/reports-icon.svg";
import ComicsIcon from "../../../../assets/static/svg/comics-icon.svg";
import CalculatorIcon from "../../../../assets/static/svg/calculator-icon.svg";
import NewsIcon from "../../../../assets/static/svg/news-icon.svg";
import Ebook from "../../../../assets/static/svg/ebook-icon.svg";

export const resourcesConfig = [
     {
          title: "Blog",
          path: BLOG,
          logo: BlogIcon
     },
     {
          title: "Report",
          path: REPORT,
          logo: ReportIcon
     },
     {
          title: "Comics",
          path: COMIC,
          logo: ComicsIcon
     },
     {
          title: "Calculator",
          path: CALCULATOR,
          logo: CalculatorIcon
     },
     {
          title: "Newsletter",
          path: NEWSLETTER,
          logo: NewsIcon
     },
     {
          title: "Ebook",
          path: EBOOK,
          logo: Ebook
     }
]