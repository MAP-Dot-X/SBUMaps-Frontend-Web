import { useState } from 'react';

export const useToggleOffCampusDining = () => {
  const [toggleStates, setToggleStates] = useState([]);
  const diningOptions = [
    { name: "1089 Noodle House", location: "By the LIRR" },
    { name: "16 Round Wood Fired Pizza", location: "By the LIRR" },
    { name: "Arnor Crepes & Bubble Tea", location: "By the LIRR" },
    { name: "China Station", location: "By the LIRR" },
    { name: "Domino's", location: "By the LIRR" },
    { name: "Druthers Coffee", location: "By the LIRR" },
    { name: "Dunkin'", location: "By the LIRR" },
    { name: "Exotic Bowls", location: "By the LIRR" },
    { name: "Green Tea", location: "By the LIRR" },
    { name: "Halal Hut", location: "By the LIRR" },
    { name: "Jersey MikesJersey Mikes", location: "By the LIRR" },
    { name: "Kung Fu Tea", location: "By the LIRR" },
    { name: "Organic Krush", location: "By the LIRR" },
    { name: "Ralph's Italian Ices & Ice Cream", location: "By the LIRR" },
    { name: "Shah's Halal", location: "By the LIRR" },
    { name: "Sora Omakase", location: "By the LIRR" },
    { name: "Stony Brook Wings", location: "By the LIRR" },
    { name: "Subway", location: "By the LIRR" },
    { name: "Súp Vietnamese Phở & Grill", location: "By the LIRR" },
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
