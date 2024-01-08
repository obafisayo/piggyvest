import React from "react";
import Customer_img from "../../../../assets/static/img/customer_img.png";
import FallbackImg from "../../../../components/fallback_img/fallback_img";

function Customer() {
     return (
          <FallbackImg img={Customer_img} />
     );
};

export default Customer;
