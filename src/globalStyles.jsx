import { createGlobalStyle } from "styled-components";

const theme = {
     palette: {
          //PIGGYVEST BACKGROUND COLORS
          PIGGYBLUE: '#0d60d8',
          SAFEBLUE: '#2295f2',
          TARGETGREEN: '#10b259',
          FLEXPINK: '#ea4fa2',
          FLEXBLACK: '#0c1825',
          INVESTPURPLE: '#7913e5',
          BACKGROUNDWHITE: '#f2f7f8',
          MAINBLACK: '#122231',
          SUBBLACK1: '#3d4f60',
          SUBBLACK2: '#0c1825'
     }
}

const GlobalStyles = createGlobalStyle`
     *,
     *::after,
     *::before {
          box-sizing: border-box
     }
     body,
     html {
          padding: 0;
          margin: 0;
          font-family: Eina01-Regular,sans-serif!important;
          background: ${theme.palette.BACKGROUNDWHITE};
          color: ${theme.palette.SUBBLACK1};
          line-height: 27.2px;
          font-size: 16px;
          letter-spacing: -.03em;
     }
     @media only screen and (max-width: 480px) {
          body {
               font-size: 16px;
          }
     }
     @media only screen and (max-width: 992px) {
          body {
               text-align: center!important;
          }
     }
     :root {
          --altumcode-spacing: 20px;
     }
     h1,h2,h3,h4,h5,h6 {
          font-family: Eina01-Bold!important;
          font-weight: 700;
          color: ${theme.palette.MAINBLACK}
     }

     a {
          font-weight: 600!important
     }

     h1,h2,h3,h4,h5,h6,p {
          margin: 0;
          overflow-wrap: break-word;
     }

     h1 {
          font-size: 65px;
          line-height: 82.42px
     }
     @media only screen and (max-width: 992px) {
          h1 {
               font-size: 55px;
               line-height: 72px;
          }
          h4 {
               font-size: 28px;
               line-height: 36px;
          }
     }
     h2 {
          font-size: 51px;
          line-height: 64.1px
     }

     h3 {
          font-size: 38px;
          line-height: 48.08px
     }

     h4 {
          font-size: 33px;
          line-height: 41.21px
     }

     h5 {
          font-size: 20px;
          line-height: 25.18px
     }

     h6 {
          font-size: 12.82px
     }
     [class*=col-] {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
     }
     a,
     a:hover {
          text-decoration: none;
          cursor: pointer;
     }
     ul {
          list-style: none;
          margin: 0;
          padding: 0;
     }
     #root,
     #__next {
          isolation: isolate;
     }
`;

export { theme, GlobalStyles };
