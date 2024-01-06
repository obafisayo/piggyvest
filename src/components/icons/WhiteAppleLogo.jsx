import React from "react";
import WhiteApple from "../../assets/static/svg/white_Apple_Logo.svg";
import Img from "../img/Img";

function WhiteAppleLogo({width, height}) {
     return (
          <Img className={"icon"} width={width} height={height} src={WhiteApple} alt={"download-apple"}/>
     );
};

export default WhiteAppleLogo;