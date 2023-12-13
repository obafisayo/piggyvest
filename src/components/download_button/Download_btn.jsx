import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../link/Link";
import SecondaryButton from "../button/SecondaryButton";
import WhiteAppleLogo from "../icons/WhiteAppleLogo";
import PlaystoreIcon from "../icons/PlaystoreIcon";

function DownloadButton() {
     return(
          <Div className="margin10">
               <Div className="margin20">
                    <ButtonLink to={"https://apps.apple.com/ng/app/piggyvest/id1263117994"}>
                         <SecondaryButton classname={"download-btn"} 
                         icon={<WhiteAppleLogo />} 
                         text={"Get on iPhone"}
                         />
                    </ButtonLink>
                    <ButtonLink to={"https://play.google.com/store/apps/details?id=com.piggybankng.piggy"}>
                         <SecondaryButton classname={"download-btn"}
                         icon={<PlaystoreIcon />}
                         text={"Get on Android"}
                         />
                    </ButtonLink>
               </Div>
          </Div>
     );
};
const Div = styled.div`
     min-width: 548px;
     &.margin10 {
          margin-top: 10px;
     }
     &.margin20 {
          margin-top: 20px;
          @media only screen and (max-width: 400px) {
               display: flex;
               flex-direction: column;
               gap: 1rem;
          }
          @media only screen and (max-width: 992px) {
               margin-top: 30px;
          }
     }
`;
export default DownloadButton;