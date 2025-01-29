import React from 'react';
import { useToggleFoodTrucks } from '../../hooks/useToggleFoodTrucks';
import SubSidebarTemplate from './SubSidebarTemplate';

const FoodTruckSidebar = ({ onClose, onOptionClick, goBack }) => {
  const [toggleStates, handleToggleChange, diningOptions] = useToggleFoodTrucks();

  return (
    <SubSidebarTemplate
      title="Food Trucks"
      options={diningOptions}
      toggleStates={toggleStates}
      onToggleChange={handleToggleChange}
      onClose={onClose}
      onOptionClick={onOptionClick}
      goBack={goBack}
    />
  );
};

export default FoodTruckSidebar;
