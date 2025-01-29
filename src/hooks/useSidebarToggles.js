// src/hooks/useSidebarToggles.js
import { useState } from 'react';

export const useSidebarToggles = () => {
  const [toggleStates, setToggleStates] = useState({
    exploreSidebar: true,
    foodSidebar: false,
  });

  const handleToggleSidebar = (name) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  return [toggleStates, handleToggleSidebar];
};
