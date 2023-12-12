import React from "react";
import Playstore from "../../assets/static/svg/google_icon.svg";
import Img from "../img/Img";

function PlaystoreIcon() {
     return (
          <Img className={"icon play"} width={"24"} height={"24"} src={Playstore} alt={"download-android"}/>
     );
};

export default PlaystoreIcon;