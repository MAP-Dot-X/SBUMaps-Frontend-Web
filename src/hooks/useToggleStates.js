import { useToggleDiningHalls } from './useToggleDiningHalls';
import { useToggleAcademicBuildings } from './useToggleAcademicBuildings';
import { useToggleResidentialBuildings } from './useToggleResidentialBuildings';
import { useToggleAffiliateDinings } from './useToggleAffiliateDinings'; // Import new hook

export const useToggleStates = () => {
  const [diningHallStates, handleDiningHallToggle] = useToggleDiningHalls();
  const [academicBuildingStates, handleAcademicBuildingToggle] = useToggleAcademicBuildings();
  const [residentialBuildingStates, handleResidentialBuildingToggle] = useToggleResidentialBuildings();
  const [affiliateDiningStates, handleAffiliateDiningToggle] = useToggleAffiliateDinings(); // Use new hook

  // Combine all toggle states into one
  const toggleStates = {
    ...diningHallStates,
    ...academicBuildingStates,
    ...residentialBuildingStates,
    ...affiliateDiningStates, // Add affiliate dining states
  };

  // Combined handler to toggle between all categories
  const handleToggle = (name) => {
    if (diningHallStates.hasOwnProperty(name)) {
      handleDiningHallToggle(name);
    } else if (academicBuildingStates.hasOwnProperty(name)) {
      handleAcademicBuildingToggle(name);
    } else if (residentialBuildingStates.hasOwnProperty(name)) {
      handleResidentialBuildingToggle(name);
    } else if (affiliateDiningStates.hasOwnProperty(name)) {
      handleAffiliateDiningToggle(name); // Handle affiliate dining toggle
    }
  };

  return [toggleStates, handleToggle];
};
