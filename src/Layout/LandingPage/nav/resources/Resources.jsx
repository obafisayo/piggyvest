import React from "react";
import { InternalNavlink } from "../../../../components/link/Link";
import { resourcesConfig } from "./resourcesConfig";
import { StyledDiv, Div, Image } from "../styledDiv/StyledDiv";

function Resources({display}) {
     return (
          <StyledDiv $left={"485px"} $mediabottom={"50px"} display={display} className="dropdown-menu menu2" >
               <Div className="dropdown-div div2">
                    {resourcesConfig.map((resource) => (
                         <InternalNavlink key={resource.title} to={resource.path} className="dropdown" >
                              <Image src={resource.logo} width="25"/>
                              {resource.title}
                         </InternalNavlink>
                    ))}
               </Div>
          </StyledDiv>
     );
}

export default Resources;
