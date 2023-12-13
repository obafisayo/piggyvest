import React from "react";
import Securitylock from "../../assets/static/svg/securitylock.svg";
import Img from "../img/Img";

function SecurityLock() {
     return (
          <Img src={Securitylock} alt={"security icon"} styles={{opacity: "1"}} className={"widNheight"}/>
     );
};
export default SecurityLock;