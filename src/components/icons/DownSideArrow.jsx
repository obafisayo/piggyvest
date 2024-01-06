import React from "react";
import styled from "styled-components";

function DownSideArrow({stroke, width, height, viewBox, className}) {
     return (
          <Svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg"  className={className}>
               <Path d="M15 10L20 15L15 20" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}></Path>
               <Path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}></Path>
          </Svg>
     );
};

const Svg = styled.svg`
     &.savings-svg {
          position: relative;
          top: 2px;
          vertical-align: bottom;
          margin-right: 10px;
          @media only screen and (max-width: 600px) {
               margin-right: 0;
          }
     }
     .active &.savings-svg {
          stroke: #fff!important;
          transition: color .3s ease;
     }
`;
const Path = styled.path`
     .active &.savings-svg {
          stroke: #fff!important;
          transition: color .3s ease;
     }
`;

export default DownSideArrow;