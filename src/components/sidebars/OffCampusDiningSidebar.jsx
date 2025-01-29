import React, { useState } from 'react';
import { useToggleOffCampusDining } from '../../hooks/useToggleOffCampusDining';
import SubSidebarTemplate from './SubSidebarTemplate';

const OffCampusDiningSidebar = ({ onClose, onOptionClick, goBack }) => {
  const [toggleStates, handleToggleChange, diningOptions] = useToggleOffCampusDining();


  return (
    <SubSidebarTemplate
      title="Off Campus Dining"
      options={diningOptions}
      toggleStates={toggleStates}
      onToggleChange={handleToggleChange}
      onClose={onClose}
      onOptionClick={onOptionClick}
      goBack={goBack}
    />
  );
};

export default OffCampusDiningSidebar;
