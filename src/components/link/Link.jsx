import { NavLink as RouterLink} from "react-router-dom";

import styled from "styled-components";

export const InternalNavlink = styled(RouterLink)`
     display: inline-block;
     text-decoration: none;
     font-family: Eina01-SemiBold;
     color: ${({theme}) => theme? theme : "#0c1825"};
     cursor: pointer;
     &.block {
          display: block;
     }
     .menu &.list {
          display: block;
          color: #122231!important;
     }
     &.security-link {
          color: #122231;
          position: relative;
          top: 3px;
          font-family: Eina01-Bold;
          background-image: linear-gradient(180deg,transparent 65%,#abb7ca 0);
          background-repeat: no-repeat;
          background-size: 0 100%;
          transition: all .2s ease-in;
     }
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
     &.top {
          @media only screen and (min-width: 993px) {
               .download-btn:hover {
                    top: -5px;
                    background: #000;
               }
               .transparent:hover {
                    background: transparent;
                    border: 1px solid #bbb!important;
               }
          }
     }
`;
