import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { navConfig } from "./navConfig";
import { InternalNavlink } from "../../../components/link/Link";
import Save from "./save/Save";
import Resources from "./resources/Resources";

function Nav() {
  const [saveDisplay, setSaveDisplay] = useState(0);
  const [resourceDisplay, setResourceDisplay] = useState(0);
  const saveref = useRef(null);
  const resourceref = useRef(null);

  useEffect(() => {
    const handleMouseEnter = (element, displaySetter) => {
      element.addEventListener('mouseenter', () => {
        displaySetter(1);
      });
    }

    const handleMouseLeave = (element, displaySetter) => {
      element.addEventListener('mouseleave', () => {
        displaySetter(0);
      });
    }

    const saveElement = saveref.current;
    const resourceElement = resourceref.current;

    handleMouseEnter(saveElement, setSaveDisplay);
    handleMouseLeave(saveElement, setSaveDisplay);
    handleMouseEnter(resourceElement, setResourceDisplay);
    handleMouseLeave(resourceElement, setResourceDisplay);

    return () => {
      handleMouseEnter(saveElement, setSaveDisplay);
      handleMouseLeave(saveElement, setSaveDisplay);
      handleMouseEnter(resourceElement, setResourceDisplay);
      handleMouseLeave(resourceElement, setResourceDisplay);
    };
  }, []);
const lastEl = navConfig.length - 1;
const resultant = navConfig.map((nav, index) => (
  <li key={nav.title}>
    {(index > 0 && index < lastEl) ?
      <InternalNavlink theme={"#3d4f60!important;"} to={nav.path} className="list">
        {nav.title}
      </InternalNavlink>
      : index === 0 ? 
        <span className="pos-rel">
          <InternalNavlink theme={"#3d4f60!important;"} to={nav.path} ref={saveref} className="list">
            {nav.title}
          </InternalNavlink>
          <Save display={saveDisplay} />
        </span>
      :
        <span className="pos-rel">
          <InternalNavlink theme={"#3d4f60!important;"} to={nav.path} ref={resourceref} className="list">
            {nav.title}
          </InternalNavlink>
          <Resources display={resourceDisplay} /> 
        </span>
    }
  </li>
))
  return (
    <StyledDiv className="getNav">
      <StyledUl>
        {resultant}
      </StyledUl>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  &.menu {
    display: block;
    margin-top: 17.9%;
    transition: all .3s ease-in;
    opacity: 1!important;
    font-weight: bold;
    ul {
      display: block;
    }
  }
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  gap: 24px;
  font-weight: 400;
  transition: all 0.3s ease-in;
  .pos-rel {
    position: relative;
    display: block;
  }
  li {
    list-style: none;
    text-decoration: none;
    @media only screen and (max-width: 992px) {
      display: block;
      text-align: center;
      padding-right: 0!important;
      padding: 15px 0;
    }
  }
`;


export default Nav;
