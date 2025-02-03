import { useToggleContext } from '../context/ToggleContext';

export const useToggleDiningHalls = () => {
  const { toggleStates, handleToggleChange } = useToggleContext();

  const diningOptions = [
    { name: "West Side Dining", location: "West Side Dining" },
    { name: "East Side Dining", location: "East Side Dining" },
  ];

  const handleToggle = (index) => {
    const itemName = diningOptions[index].name;
    handleToggleChange(itemName);
  };

  return [toggleStates, handleToggle, diningOptions];
};
