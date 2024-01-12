import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../link/Link";
import SecondaryButton from "../button/SecondaryButton";
import WhiteAppleLogo from "../icons/WhiteAppleLogo";
import BlackAppleLogo from "../icons/BlackAppleLogo";
import PlaystoreIcon from "../icons/PlaystoreIcon";
import PrimaryButton from "../button/PrimaryButton";

function DownloadButton({classname, whyte, blak}) {
     return(
          <Div className={`${classname} margin10`}>
               <Div className={`${classname} margin20`}>
                    <ButtonLink className={"top"} to={"https://apps.apple.com/ng/app/piggyvest/id1263117994"}>
                         {blak && <SecondaryButton classname={"download-btn"} 
                         icon={<WhiteAppleLogo width={"18"} height={"24"} />} 
                         text={"Get on iPhone"}
                         />}
                         {whyte && <PrimaryButton classname={"download-btn bordered transparent"} 
                         icon={<BlackAppleLogo width={"16"} height={"20"} />}
                         text={"Get on iPhone"}
                         />}
                    </ButtonLink>
                    <ButtonLink className={"top"} to={"https://play.google.com/store/apps/details?id=com.piggybankng.piggy"}>
                         {blak && <SecondaryButton classname={"download-btn"}
                         icon={<PlaystoreIcon width={"24"} height={"24"} />}
                         text={"Get on Android"}
                         />}
                         {whyte && <PrimaryButton classname={"download-btn bordered transparent"} 
                         icon={<PlaystoreIcon width={"21"} height={"21"} />} 
                         text={"Get on Android"}
                         />}
                    </ButtonLink>
               </Div>
          </Div>
     );
};
const Div = styled.div`
     &.white {

     }
     &.black {
          min-width: 548px;
     }
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