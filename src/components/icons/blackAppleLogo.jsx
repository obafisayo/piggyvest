import React from "react";
import blackApple from "../../assets/static/svg/blackAppleLogo.svg";
import Img from "../img/Img";

function BlackAppleLogo({width, height}) {
     return (
          <Img className={"icon"} width={width} height={height} src={blackApple} alt={"download-apple"}/>
     );
};

export default BlackAppleLogo;