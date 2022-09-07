import React, { useState, createContext, useContext } from "react";

const MoveContext = createContext();

export const useMoveContext = () => {
  const context = useContext(MoveContext);
  const [toggle, setToggle] = context.toggle;

  const handleTheme = () => {
    setToggle((prev) => !prev);
  };

  return {
    handleTheme,
    toggle,
  };
};

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <MoveContext.Provider value={{ toggle: [toggle, setToggle] }}>
      {children}
    </MoveContext.Provider>
  );
};
