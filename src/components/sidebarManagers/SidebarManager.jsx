import React, { useState } from 'react';
import ExploreSidebar from '../sidebars/ExploreSidebar';
import FoodSidebarManager from './foodSidebarManager';
import BuildingSidebarManager from './BuildingSidebarManager';
import TransportationSidebarManager from './TransportationSIdebarManager';

const SidebarManager = ({ onClose }) => {
  const [subSidebar, setSubSidebar] = useState('');
  const [infoSidebar, setInfoSidebar] = useState(null);
  const [previousSidebar, setPreviousSidebar] = useState('');

  const handleOptionClick = (item) => {
    setPreviousSidebar(subSidebar);
    setSubSidebar(item.toLowerCase());
  };

  const goBack = () => {
    setSubSidebar(previousSidebar);
  };

  return (
    <>
      {/* Explore Sidebar will show only if subSidebar is empty */}
      {subSidebar === '' && (
        <ExploreSidebar
          onOptionClick={handleOptionClick} 
          onClose={onClose}
        />
      )}

      {subSidebar === 'buildings' && (
        <BuildingSidebarManager
          setSubSidebar={setSubSidebar}
          setInfoSidebar={setInfoSidebar}
          onClose={onClose}
          goBack={goBack}
        />
      )}

      {subSidebar === 'food' && (
        <FoodSidebarManager
          setSubSidebar={setSubSidebar}
          setInfoSidebar={setInfoSidebar}
          onClose={onClose}
          goBack={goBack}
        />
      )}

      {subSidebar === 'transportation' && (
       <TransportationSidebarManager
          setSubSidebar={setSubSidebar}
          setInfoSidebar={setInfoSidebar}
          onClose={onClose}
          goBack={goBack}
        />
      )}

    </>
  );
};

export default SidebarManager;
