// src/context/ToggleContext.js
import React, { createContext, useState, useContext } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggleStates, setToggleStates] = useState({
    "West Side Dining": false,
    "East Side Dining": false,
  });

  const handleToggleChange = (item) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [item]: !prevStates[item],
    }));
  };

  return (
    <ToggleContext.Provider value={{ toggleStates, handleToggleChange }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggleContext = () => useContext(ToggleContext);
