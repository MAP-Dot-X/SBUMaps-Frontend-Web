import SubSidebarTemplate from './SubSidebarTemplate';
import { useToggleResidentialBuildings } from '../../hooks/useToggleResidentialBuildings';

const ResidentialBuildingSidebar = ({ onClose, onOptionClick, goBack }) => {
  const [toggleStates, handleToggleChange, buildingOptions] = useToggleResidentialBuildings();

  return (
    <SubSidebarTemplate
      title="Residential Buildings"
      options={buildingOptions}
      toggleStates={toggleStates}
      onToggleChange={handleToggleChange}
      onClose={onClose}
      onOptionClick={onOptionClick}
      goBack={goBack}
    />
  );
};

export default ResidentialBuildingSidebar;
