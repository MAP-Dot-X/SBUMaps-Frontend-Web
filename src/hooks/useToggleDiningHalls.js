// src/hooks/useToggleDiningHall.js
import { useState } from 'react';

export const useToggleDiningHalls = () => {
  const [toggleStates, setToggleStates] = useState([]);
  
  const diningOptions = [
    { name: "East Side Dining", location: "East Side Dining" },
    { name: "West Side Dining", location: "West Side Dining" },
  ];

  if (toggleStates.length === 0) {
    setToggleStates(new Array(diningOptions.length).fill(false));
  }

  const handleToggle = (index) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return [toggleStates, handleToggle, diningOptions];
};
