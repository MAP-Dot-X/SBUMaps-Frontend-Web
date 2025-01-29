import React from 'react';
import { useToggleAffiliateDinings } from '../../hooks/useToggleAffiliateDinings';
import SubSidebarTemplate from './SubSidebarTemplate';

const AffiliateDiningSidebar = ({ onClose, onOptionClick, goBack }) => {
  const [toggleStates, handleToggleChange, diningOptions] = useToggleAffiliateDinings();

  return (
    <SubSidebarTemplate
      title="Affiliate Dinings"
      options={diningOptions}
      toggleStates={toggleStates}
      onToggleChange={handleToggleChange}
      onClose={onClose}
      onOptionClick={onOptionClick}
      goBack={goBack}
    />
  );
};

export default AffiliateDiningSidebar;
