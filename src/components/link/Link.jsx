import { NavLink as RouterLink} from "react-router-dom";

import styled from "styled-components";
import { theme } from "../../globalStyles";

export const InternalNavlink = styled(RouterLink)`
     display: inline-block;
     text-decoration: none;
     font-family: Eina01-SemiBold;
     color: ${({theme}) => theme? theme : "#0c1825"};
     cursor: pointer;
     &.footer_a {
          display: block;
          text-align: left;
          font-family: Eina01-Regular;
          font-weight: 300!important;
          transition: color .5s;
          font-size: 14px;
          margin-bottom: 8px;
          line-height: 22.08px;
     }
     &.footer_li {
          color: #122231;
          display: inline;
          margin-bottom: 0;
     }
     &.footer_logo {
          display: inline-flex;
          margin-bottom: 25px;
     }
     &.text-right {
          display: block;
          text-align: right;
          line-height: 21px;
          margin-bottom: 15px;
          font-size: 14px;
          font-weight: 300!important;
          font-family: inherit;
          transition: color .5s;
          @media only screen and (max-width: 992px) {
               text-align: left;
          }
     }
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
          color: ${theme.palette.PIGGYBLUE};
          }
          &.safe {
               color: ${theme.palette.SAFEBLUE};
          }
          &.target {
               color: ${theme.palette.TARGETGREEN};
          }
          &.naira {
               color: ${theme.palette.FLEXPINK};
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
