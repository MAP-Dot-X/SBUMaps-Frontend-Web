import { useState } from 'react';

export const useToggleAcademicBuildings = () => {
  const [toggleStates, setToggleStates] = useState({
    "Bioengineering": false,
    "Chemistry": false,
    "Computer Science": false,
    "Earth and Space Sciences": false,
    "Engineering": false,
    "Heavy Engineering": false,
    "Harriman Hall (Business)": false, 
    "Humanities": false, 
    "Javits Lecture Center": false, 
    "Life Sciences": false, 
    "Light Engineering": false, 
    "Math Tower": false, 
    "Old Computer Science": false, 
    "Psychology A": false, 
    "Psycology B": false, 
    "Social and Behavioral Sciences": false, 
  });


  const handleToggle = (name) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  return [toggleStates, handleToggle];
};
