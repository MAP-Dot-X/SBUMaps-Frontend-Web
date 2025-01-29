import React, { useState } from 'react';
import WSDSidebar from '../infoSidebar/WSDSidebar';
import BuildingSidebar from '../sidebars/BuildingSidebar';
import AcademicBuildingSidebar from '../sidebars/AcademicBuildingSidebar';
import ResidentialBuildingSidebar from '../sidebars/ResidentialBuildingSidebar';
import AthleticSidebar from '../sidebars/AthleticSidebar';

const AthleticSidebarManager = ({ onClose, onSubItemClick, goBack }) => {
  const [subSidebar, setSubSidebar] = useState(null);

  const handleSubSidebarChange = (item) => {
    setSubSidebar(item); // Navigate to sub-sidebar
    onSubItemClick(item); // Notify parent of sub-sidebar change
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
        <AthleticSidebar
          onClose={onClose}
          onSubItemClick={handleSubSidebarChange}
          goBack={handleGoBack}
        />
      )}
      {subSidebar === 'Academic' && (
        <AcademicBuildingSidebar
          onClose={onClose}
          goBack={handleGoBack}
        />
      )}
    </div>
  );
};


export default AthleticSidebarManager;
