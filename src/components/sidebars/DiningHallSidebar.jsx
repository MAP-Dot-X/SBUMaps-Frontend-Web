import { useToggleDiningHalls } from '../../hooks/useToggleDiningHalls';
import SubSidebarTemplate from './SubSidebarTemplate';

const DiningHallSidebar = ({ onClose, onOptionClick, goBack }) => {
  const [toggleStates, handleToggleChange, diningOptions] = useToggleDiningHalls();

  return (
    <SubSidebarTemplate
      title="Dining Halls"
      options={diningOptions}
      toggleStates={toggleStates}
      onToggleChange={handleToggleChange}
      onClose={onClose}
      onOptionClick={onOptionClick}
      goBack={goBack}
    />
  );
};

export default DiningHallSidebar;
