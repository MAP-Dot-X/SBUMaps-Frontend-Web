// src/hooks/useToggleResidentialBuildings.js
import { useState } from 'react';

export const useToggleResidentialBuildings = () => {
  const [toggleStates, setToggleStates] = useState([]);
  
  const buildingOptions = [
    { name: "Wagner Hall", community: "Eleanor Roosevelt" },
    { name: "Greeley Hall", community: "Eleanor Roosevelt" },
    { name: "Keller Hall", community: "Eleanor Roosevelt" },
    { name: "Stimson Hall", community: "Eleanor Roosevelt" },
    { name: "Irving Hall", community: "Mendelsohn" },
    { name: "O' Neill Hall", community: "Mendelsohn" },
    { name: "Ammann Hall", community: "Mendelsohn" },
    { name: "Gray Hall", community: "Mendelsohn" },
    { name: "James Hall", community: "H" },
    { name: "Langmuir Hall", community: "H" },
    { name: "Benedict South Hall", community: "H" },
    { name: "Benedict North Hall", community: "H" },
    { name: "Dewey Hall", community: "Kelly" },
    { name: "Hamilton Hall", community: "Kelly" },
    { name: "Schick Hall", community: "Kelly" },
    { name: "Baruch Hall", community: "Kelly" },
    { name: "Eisenhower Hall", community: "Kelly" },
    { name: "Hand Hall", community: "Tabler" },
    { name: "Toscanini Hall", community: "Tabler" },
    { name: "Douglass Hall", community: "Tabler" },
    { name: "Dreiser Hall", community: "Tabler" },
    { name: "Chinn Hall", community: "Tabler" },
    { name: "Hendrix Hall", community: "Roth" },
    { name: "Mount Hall", community: "Roth" },
    { name: "Gershwin Hall", community: "Roth" },
    { name: "Cardozo Hall", community: "Roth" },
    { name: "Whitman Hall", community: "Roth" },
    { name: "Lauterbur Hall", community: "Living Learning" },
    { name: "Yang Hall", community: "Living Learning" },
    { name: "Chávez Hall", community: "Living Learning" },
    { name: "Tubman Hall", community: "Living Learning" },
    { name: "West A", community: "West Apartments" },
    { name: "West B", community: "West Apartments" },
    { name: "West C", community: "West Apartments" },
    { name: "West D", community: "West Apartments" },
    { name: "West E", community: "West Apartments" },
    { name: "West F", community: "West Apartments" },
    { name: "West G", community: "West Apartments" },
    { name: "West H", community: "West Apartments" },
    { name: "West I", community: "West Apartments" },
    { name: "West J", community: "West Apartments" },
    { name: "West K", community: "West Apartments" },
  ];

  // Initialize the toggleStates with all false values
  if (toggleStates.length === 0) {
    setToggleStates(new Array(buildingOptions.length).fill(false));
  }

  const handleToggle = (index) => {
    setToggleStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return [toggleStates, handleToggle, buildingOptions];
};
