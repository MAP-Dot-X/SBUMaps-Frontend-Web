import React, { useState } from 'react';
import SidebarTemplate from './SidebarTemplate';

const TransportationSidebar = ({ onClose, onSubItemClick, goBack }) => {

  const transportationOptions = [
    { name: 'Bike', icon: '🚲' },
    { name: 'Bus', icon: '🚐' },
    { name: 'LIRR', icon: '🚆' },
  ];

  return (
    <SidebarTemplate 
      title="Food"
      options={transportationOptions}
      onClose={onClose}
      onSubItemClick={onSubItemClick}
      goBack={goBack}
    />
  );
};

export default TransportationSidebar;
