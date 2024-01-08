import React from "react";
import PageHeader from "../../../../components/pageheader/PageHeader";
import Piggybank_header from "../../../../assets/static/img/piggybank_header.png"
function PiggyHeader() {
     return(
          <PageHeader staticImg={Piggybank_header}
               background={"#0d60d8"}
               title={"Piggybank"}>
               Strict daily, weekly or monthly automatic savings. Earn up to 10% p.a.
          </PageHeader>
     );
};

export default PiggyHeader;
