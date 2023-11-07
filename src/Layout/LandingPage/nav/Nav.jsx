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

  return (
    <StyledNav className="getNav">
      {navConfig.map((nav, index) => (
        <InternalNavlink
          theme={"#3d4f60!important;"}
          key={nav.title}
          to={nav.path}
          ref={index === 0 ? saveref : (index === navConfig.length - 1 ? resourceref : null)}
        >
          {nav.title}
        </InternalNavlink>
      ))}
      <Save display={saveDisplay} />
      <Resources display={resourceDisplay} />
    </StyledNav>
  );
}

const StyledNav = styled.div`
  display: flex;
  gap: 24px;
  font-weight: 400;
  transition: all 0.3s ease-in;
  &.menu {
    place-content: center;
    position: absolute;
    display: grid!important;
    grid-template-columns: 1fr;
    width: 100%;
    /* top: 150px; */
    margin-top: 80%;
    transition: all .3s ease-in;
    opacity: 1!important;
  }
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export default Nav;
