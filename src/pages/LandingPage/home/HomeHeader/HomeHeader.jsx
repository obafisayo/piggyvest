import React from "react";
import PageHeader from "../../../../components/pageheader/PageHeader";
import HomeImage from "../../../../assets/static/img/home_image.avif"

function HomeHeader() {
     return (
          <PageHeader moving
               classname={"home-header"}
               smallImg
               movingImg={HomeImage}
               moving_class={"home-header"}
               title={"The Better Way to Save & Invest"}>
               Piggyvest helps over 4 million customers achieve 
               their financial goals by helping them save and 
               invest with ease.
          </PageHeader>
     );
};

export default HomeHeader;
