import React, { useState } from 'react';
import FoodSidebar from '../sidebars/FoodSidebar';
import DiningHallSidebar from '../sidebars/DiningHallSidebar'; 
import AffiliateDiningSidebar from '../sidebars/AffiliateDiningSidebar';
import WSDSidebar from '../infoSidebar/WSDSidebar';
import FoodTruckSidebar from '../sidebars/FoodTruckSidebar';
import OffCampusDiningSidebar from '../sidebars/OffCampusDiningSidebar';

const FoodSidebarManager = ({ onClose, onSubItemClick, goBack }) => {
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
        <FoodSidebar
          onClose={onClose}
          onSubItemClick={handleSubSidebarChange}
          goBack={handleGoBack}
        />
      )}
      
      {subSidebar === 'Dining Halls' && (
        <DiningHallSidebar
          onClose={onClose}
          onOptionClick={handleInfoSidebarChange} 
          goBack={handleGoBack}
        />
      )}
      {subSidebar === 'Affiliate Dining' && (
        <AffiliateDiningSidebar
          onClose={onClose}
          onOptionClick={handleInfoSidebarChange} 
          goBack={handleGoBack}
        />
      )}
      {subSidebar === 'Food Trucks' && (
        <FoodTruckSidebar
          onClose={onClose}
          onOptionClick={handleInfoSidebarChange} 
          goBack={handleGoBack}
        />
      )}
      {subSidebar === 'Off Campus Dining' && (
        <OffCampusDiningSidebar
          onClose={onClose}
          onOptionClick={handleInfoSidebarChange} 
          goBack={handleGoBack}
        />
      )}

      {infoSidebar === 'West Side Dining' && <WSDSidebar onClose={closeInfoSidebar} />}
    </div>
  );
};

export default FoodSidebarManager;
