import { useState } from 'react';

export const useToggleResidentialBuildings = () => {
  const [toggleStates, setToggleStates] = useState([]);
  
  const buildingOptions = [
    { name: "Wagner Hall", location: "Eleanor Roosevelt" },
    { name: "Greeley Hall", location: "Eleanor Roosevelt" },
    { name: "Keller Hall", location: "Eleanor Roosevelt" },
    { name: "Stimson Hall", location: "Eleanor Roosevelt" },
    { name: "Irving Hall", location: "Mendelsohn" },
    { name: "O' Neill Hall", location: "Mendelsohn" },
    { name: "Ammann Hall", location: "Mendelsohn" },
    { name: "Gray Hall", location: "Mendelsohn" },
    { name: "James Hall", location: "H" },
    { name: "Langmuir Hall", location: "H" },
    { name: "Benedict South Hall", location: "H" },
    { name: "Benedict North Hall", location: "H" },
    { name: "Dewey Hall", location: "Kelly" },
    { name: "Hamilton Hall", location: "Kelly" },
    { name: "Schick Hall", location: "Kelly" },
    { name: "Baruch Hall", location: "Kelly" },
    { name: "Eisenhower Hall", location: "Kelly" },
    { name: "Hand Hall", location: "Tabler" },
    { name: "Toscanini Hall", location: "Tabler" },
    { name: "Douglass Hall", location: "Tabler" },
    { name: "Dreiser Hall", location: "Tabler" },
    { name: "Chinn Hall", location: "Tabler" },
    { name: "Hendrix Hall", location: "Roth" },
    { name: "Mount Hall", location: "Roth" },
    { name: "Gershwin Hall", location: "Roth" },
    { name: "Cardozo Hall", location: "Roth" },
    { name: "Whitman Hall", location: "Roth" },
    { name: "Lauterbur Hall", location: "Living Learning" },
    { name: "Yang Hall", location: "Living Learning" },
    { name: "Chávez Hall", location: "Living Learning" },
    { name: "Tubman Hall", location: "Living Learning" },
    { name: "West A", location: "West Apartments" },
    { name: "West B", location: "West Apartments" },
    { name: "West C", location: "West Apartments" },
    { name: "West D", location: "West Apartments" },
    { name: "West E", location: "West Apartments" },
    { name: "West F", location: "West Apartments" },
    { name: "West G", location: "West Apartments" },
    { name: "West H", location: "West Apartments" },
    { name: "West I", location: "West Apartments" },
    { name: "West J", location: "West Apartments" },
    { name: "West K", location: "West Apartments" },
  ];

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
