import { useState } from 'react';

export const useToggleBikes = () => {
  const [toggleStates, setToggleStates] = useState([]);

  const transportationOptions = [
    { name: "Carvel", location: "East Side Dining" },
  ];

  if (toggleStates.length === 0) {
    setToggleStates(new Array(transportationOptions.length).fill(false));
  }

  const handleToggle = (index) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return [toggleStates, handleToggle, transportationOptions];
};
