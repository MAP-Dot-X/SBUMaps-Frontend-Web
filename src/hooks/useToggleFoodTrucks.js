import { useState } from 'react';

export const useToggleFoodTrucks = () => {
  const [toggleStates, setToggleStates] = useState([]);
  const diningOptions = [
    { name: "Anona", location: "SAC Plaza/Bus Loop" },
    { name: "Chatime", location: "SAC Plaza/Bus Loop" },
    { name: "Halal Wayz", location: "SAC Plaza/Bus Loopg" },
    { name: "Mr. Kim's Hibachi Grill", location: "SAC Plaza/Bus Loop" },
    { name: "Nathan's Famous", location: "SAC Plaza/Bus Loop" },
    { name: "SBU Eats Grill/Wings", location: "SAC Plaza/Bus Loop" },
    { name: "Carvel", location: "SAC Plaza/Bus Loop (During special events)" },
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
