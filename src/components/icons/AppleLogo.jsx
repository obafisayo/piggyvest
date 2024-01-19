import React from "react";
import Img from "../img/Img";
import BlackApple from "../../assets/static/svg/blackAppleLogo.svg";
import WhiteApple from "../../assets/static/svg/white_Apple_Logo.svg";
function AppleLogo({width, height, blak}) {
     return (
          <Img className={"icon"} width={width} height={height} src={blak? BlackApple : WhiteApple} alt={"download-apple"}/>
     );
};

export default AppleLogo;