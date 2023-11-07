import React from "react";
import styled from "styled-components";
import { saveConfig } from "./saveConfig";
import { InternalNavlink } from "../../../../components/link/Link";
import { StyledDiv, Div, Image } from "../styledDiv/StyledDiv";

function Save({display}) {

     return (
          <StyledDiv $left={"225px"} $mediabottom={"50px"} display={display} className="dropdown-menu">
               <Div className="Dropdown-div">
                    {saveConfig.map((save) => (
                         <InternalNavlink key={save.title} to={save.path} className={save.class}>
                              <Image src={save.logo} width="25" />
                              <div>
                                   <Pfirst>{save.title}</Pfirst>
                                   <Plast>{save.subtitle}</Plast>
                              </div>
                         </InternalNavlink>
                    ))}
               </Div>
          </StyledDiv>
     );
}

const Plast = styled.p`
     font-family: Eina01-Regular,sans-serif;
     color: #3d4f60;
     font-weight: 400;
     font-size: 14px;
     line-height: 19px;
`;
const Pfirst = styled.p`
     font-size: 16px;
     line-height: 22px;
     margin-bottom: 4px;
     font-family: Eina01-SemiBold;
`;
export default Save;
