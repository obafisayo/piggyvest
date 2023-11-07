import { NavLink as RouterLink} from "react-router-dom";

import styled from "styled-components";

export const InternalNavlink = styled(RouterLink)`
     display: inline-block;
     text-decoration: none;
     font-family: Eina01-SemiBold;
     color: ${({theme}) => theme? theme : "#0c1825"};
     cursor: pointer;
     &.dropdown {
          display: flex;
          align-items: center;
          padding: 10.5px 8px;
          font-size: 14px;
          white-space: nowrap;
          transition: all .3s ease-in-out;
          text-align: left;
          color: #000;
     }
     &.dropdown:hover {
          background: #f8fbfb;
          border-radius: 8px;
          color: #000;
          &.piggy {
               color: #0d60d8;
          }
          &.safe {
               color: #2295f2;
          }
          &.target {
               color: #10b259;
          }
          &.naira {
               color: #ea4fa2;
          }
     }
`;

export const ButtonLink = styled(RouterLink)`
     text-decoration: none;
     color: ${({theme}) => theme? theme : "#0c1825!important"};
     cursor: pointer;
`;
