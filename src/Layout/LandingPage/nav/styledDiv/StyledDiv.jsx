import styled from "styled-components";

export const StyledDiv = styled.div`
     cursor: pointer;
     position: absolute;
     left: ${(props) => props.$left || '0'};
     top: 47px;
     min-width: 496px;
     box-shadow: 0 4px 10px rgba(0,0,0,.25);
     border-radius: 8px;
     display: ${({display}) => display? "block" : "none"};;
     transition: display .2s;
     padding: 24px;
     z-index: 20;
     background: #fff;
     @media only screen and (max-width: 992px){
          min-width: 300px;
     }
     @media only screen and (max-width: 600px) {
          top: ${(props) => props.$mediabottom || '0'};
          left: 0%;
          right: 14%;
          background-color: red;
          max-width: 200px;
          margin: 0 auto;
          padding: 12px;
     }
     &:hover {
          display: block;
     }
     &.menu2 {
          min-width: 300px;
     }
`;

export const Div = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-gap: 20px;
     gap: 20px;
     @media only screen and (max-width: 992px) {
          grid-template-columns: 1fr;
          grid-gap: 15px;
          gap: 15px;
     }
     &.div2 {
          display: grid;
          grid-template-columns: 200px 200px;
          grid-gap: 20px;
          gap: 20px;
          @media only screen and (max-width: 992px) {
               grid-template-columns: ;
          }
     }
`;

export const Image = styled.img`
     position: relative;
     object-fit: contain;
     width: 40px;
     margin-right: 10px;
`;
