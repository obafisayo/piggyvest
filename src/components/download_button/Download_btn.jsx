import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../link/Link";
import SecondaryButton from "../button/SecondaryButton";
import AppleLogo from "../icons/AppleLogo";
import PlaystoreIcon from "../icons/PlaystoreIcon";
import PrimaryButton from "../button/PrimaryButton";

function DownloadButton({classname, whyte, blak}) {
     return(
          <Div className={`margin10 ${classname}`}>
               <Div className={`margin20 ${classname}`}>
                    <ButtonLink className={"top"} to={"https://apps.apple.com/ng/app/piggyvest/id1263117994"}>
                         {blak && <SecondaryButton classname={`download-btn ${classname}`}
                         icon={classname.includes("white")?
                              <AppleLogo width={"18"} height={"24"} blak/>
                                   :
                              <AppleLogo width={"18"} height={"24"} />
                         } 
                         text={"Get on iPhone"}
                         />}
                         {whyte && <PrimaryButton classname={"download-btn bordered transparent"} 
                         icon={<AppleLogo width={"16"} height={"20"} blak />}
                         text={"Get on iPhone"}
                         />}
                    </ButtonLink>
                    <ButtonLink className={"top"} to={"https://play.google.com/store/apps/details?id=com.piggybankng.piggy"}>
                         {blak && <SecondaryButton classname={`download-btn ${classname}`}
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
     &.other-header {
          min-width: 548px;
          @media only screen and (max-width: 992px) {
               padding-top: 5px;
               margin-top: 10px!important;
          }
     }
     &.margin10 {
          margin-top: 10px;
     }
     .margin10 &.black {
          margin-top: 0px;
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