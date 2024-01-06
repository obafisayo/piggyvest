import React from "react";
import Playstore from "../../assets/static/svg/google_icon.svg";
import Img from "../img/Img";

function PlaystoreIcon({width, height}) {
     return (
          <Img className={"icon play"} width={width} height={height} src={Playstore} alt={"download-android"}/>
     );
};

export default PlaystoreIcon;