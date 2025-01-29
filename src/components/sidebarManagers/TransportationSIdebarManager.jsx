import React, { useState } from 'react';
import TransportationSidebar from '../sidebars/TransportationSidebar';
import BikeSidebar from '../sidebars/BikeSidebar';

const TransportationSidebarManager = ({ onClose, onSubItemClick, goBack }) => {
  const [subSidebar, setSubSidebar] = useState(null);
  const [infoSidebar, setInfoSidebar] = useState(null);
  
  const handleSubSidebarChange = (item) => {
    setSubSidebar(item);
    onSubItemClick(item); 
  };

  const handleInfoSidebarChange = (item) => {
    if (item === 'West Side Dining') {
      setInfoSidebar('West Side Dining');
    }
  };

  const closeInfoSidebar = () => {
    setInfoSidebar(null);
  };

  const handleGoBack = () => {
    if (subSidebar === null) {
      goBack(); // Back to ExploreSidebar
    } else {
      setSubSidebar(null);
    }
  };

  return (
    <div>
      {!subSidebar && (
        <TransportationSidebar
          onClose={onClose}
          onSubItemClick={handleSubSidebarChange}
          goBack={handleGoBack}
        />
      )}
      {subSidebar === 'Bike' && (
        <BikeSidebar
          onClose={onClose}
          onOptionClick={handleInfoSidebarChange} 
          goBack={handleGoBack}
        />
      )}
    

    
    </div>
  );
};

export default TransportationSidebarManager;
