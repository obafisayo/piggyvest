import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Black_Logo from "../../assets/static/svg/companylogo-black.svg"
import White_logo from "../../assets/static/svg/companylogo-white.svg"
import Piggy_logo from "../../assets/static/svg/companylogo-piggybank.svg"
import Safe_logo from "../../assets/static/svg/companylogo-safelock.svg"
import Target_logo from "../../assets/static/svg/companylogo-target.svg"
import Naira_logo from "../../assets/static/svg/companylogo-flex-naira.svg"
import Dollar_logo from "../../assets/static/svg/companylogo-flex-dollar.svg"
import Invest_logo from "../../assets/static/svg/companylogo-invest.svg"

import { ButtonLink } from "../link/Link";
import {  FLEXDOLLAR,
          FLEXNAIRA,
          HOME,
          INVEST,
          PIGGYBANK,
          SAFELOCK,
          TARGETSAVINGS
} from "../../routes/routeConstants";
import { useParams } from "react-router-dom";

function CompanyLogo({scrolled, pathname}) {
     const [logoComponent, setLogoComponent] = useState(Black_Logo);
     const [bottom, setBottom] = useState("3px");
     const params = useParams();

     useEffect(() => {
          // Update the logo based on the current route
          const id = params.id
          function updateLogo(logo) {
               setLogoComponent(White_logo);
               setBottom("-0.7px")
               if (scrolled) {
                    setLogoComponent(logo);
                    setBottom("3px")
               }
          }
          // take the path
          switch (pathname) {
               case HOME:
                    setLogoComponent(Black_Logo);
                    setBottom("3px");
                    break;
               case `/${PIGGYBANK}`:
                    updateLogo(Piggy_logo);
                    break;
               case `/${SAFELOCK}`:
                    updateLogo(Safe_logo);
                    break;
               case `/${TARGETSAVINGS}`:
                    updateLogo(Target_logo);
                    break;
               case `/${TARGETSAVINGS}/${id}`:
                    setLogoComponent(Target_logo);
                    break;
               case `/${FLEXNAIRA}`:
                    updateLogo(Naira_logo);
                    break;
               case `/${FLEXDOLLAR}`:
                    updateLogo(Dollar_logo);
                    break;
               case `/${INVEST}`:
                    updateLogo(Invest_logo);
                    break;
               case `/${INVEST}/${id}`:
                    setLogoComponent(Invest_logo);
                    break;
               default:
                    setLogoComponent(Black_Logo);
                    setBottom("3px");
                    break;
          }
     }, [pathname, scrolled, params]);

     return(
          <ButtonLink to={HOME} className={"logo"} style={{display: "flex"}}>
               <StyledImg src={logoComponent} alt="piggyvest-logo" width="225"
                    height="40" style={{bottom: `${bottom}`}}
               />
          </ButtonLink>
     );
}

const StyledImg = styled.img`
     position: relative;
     padding-right: 50px!important;
     @media only screen and (max-width: 992px) {
          top: 1.6px;
          bottom: 0!important;
          padding-right: 0!important;
          width: 155px;
     }
`;
export default CompanyLogo;
