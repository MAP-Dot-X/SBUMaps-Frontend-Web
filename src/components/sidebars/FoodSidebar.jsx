import React from 'react';
import SidebarTemplate from './SidebarTemplate';

const FoodSidebar = ({ onClose, onSubItemClick, goBack }) => {
  const foodOptions = [
    { name: 'Dining Halls', icon: '🍽️' },
    { name: 'Affiliate Dining', icon: '🥗' },
    { name: 'Food Trucks', icon: '🚚' },
    { name: 'Off Campus Dining', icon: '🏙️' },
  ];

  return (
    <SidebarTemplate 
      title="Food"
      options={foodOptions}
      onClose={onClose}
      onSubItemClick={onSubItemClick}
      goBack={goBack}
    />
  );
};

export default FoodSidebar;
