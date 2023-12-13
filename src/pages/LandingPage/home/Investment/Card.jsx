import React from "react";
import styled from "styled-components";
import DownSideArrow from "../../../../components/icons/DownSideArrow";
import { InternalNavlink } from "../../../../components/link/Link";
import TextCard from "../../../../components/TextCard/TextCard";

function Card({title, children, classname, link_text}) {
     return (
          <Div className={classname}>
               <Div className={"investment security content"}>
                    <TextCard header4 paragraph h4style classname={"security-text title"}
                         title={title}>
                         {children}
                    </TextCard>
                    <Div className="learn-more">
                         <DownSideArrow />
                         <InternalNavlink className={"security-link"} to="/security">
                              {link_text}
                         </InternalNavlink>
                    </Div>
               </Div>
          </Div>
     );
};
const Div = styled.div`
     &.learn-more {
          display: flex;
          align-items: center;
          margin: 10px 0 0;
     }
     &.right {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
     }
     &.content {
        margin-top: 0!important;
        max-width: 700px;
        @media only screen and (max-width: 600px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        @media only screen and (max-width: 992px) {
            margin-left: auto!important;
            margin-right: auto!important;
        }
    }
`;

export default Card;