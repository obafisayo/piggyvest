import React, { createContext, useContext } from "react";
import useContextState from "./useContextState";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const contextState = useContextState();

  return (
    <ScrollContext.Provider value={contextState}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  return useContext(ScrollContext);
};
