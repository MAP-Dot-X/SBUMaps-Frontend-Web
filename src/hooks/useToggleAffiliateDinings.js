import { useToggleContext } from '../context/ToggleContext';

export const useToggleAffiliateDinings = () => {
  const { toggleStates, handleToggleChange } = useToggleContext();
  
  const diningOptions = [
    { name: "Carvel", location: "East Side Dining" },
    { name: "Cocina Fresca", location: "East Side Dining" },
    { name: "Corner Deli", location: "Student Activities Center" },
    { name: "Craft Salads, Smoothies and Bowls", location: "Student Activities Center" },
    { name: "Delancey Street", location: "East Side Dining" },
    { name: "Dunkin", location: "Student Activities Center" },
    { name: "Dunkin Express", location: "Student Activities Center" },
    { name: "East Market", location: "East Side Dining" },
    { name: "Emporium Market", location: "East Side Dining" },
    { name: "Halal NY", location: "East Side Dining" },
    { name: "Iron Waffless", location: "East Side Dining" },
    { name: "Island soi", location: "East Side Dining" },
    { name: "Jasmine Food Court", location: "Charles B. Wang Center" },
    { name: "Market", location: "West Side Dining" },
    { name: "Market Place Café", location: "Hospital Lobby" },
    { name: "Peet's Coffee", location: "Alan S. deVries Center" },
    { name: "Popeye's", location: "Roth Cafe" },
    { name: "SAC Market", location: "Student Activities Center" },
    { name: "Savor", location: "Roth Cafe" },
    { name: "Seawolves Pizza", location: "Student Activities Center" },
    { name: "Skyline Deli", location: "Hospital Lobby" },
    { name: "Smash n' Shake", location: "Roth Cafe" },
    { name: "Starbucks", location: "Hospital Lobby" },
    { name: "Starbucks", location: "Melville Library" },
    { name: "Starbucks", location: "Roth Cafe" },
    { name: "Subway", location: "Roth Cafe" },
    { name: "We Proudly Serve Starbucks", location: "Administration Building" },
    { name: "Wicked Wingz", location: "East Side Dining" },
  ];

  const handleToggle = (index) => {
    const itemName = diningOptions[index].name;
    handleToggleChange(itemName);
  };

  return [toggleStates, handleToggle, diningOptions];
};
