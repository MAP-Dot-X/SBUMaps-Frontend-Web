import SidebarTemplate from './SidebarTemplate';

const BuildingSidebar = ({ onClose, onSubItemClick, goBack }) => {
  const buildingOptions = [
    { name: 'Academic', icon: '🏫' },
    { name: 'Adminstrative', icon: '🏢' },
    { name: 'Residential', icon: '🏠' },
    { name: 'Library', icon: '📚' },
    { name: 'Medical', icon: '🏥' },
    { name: 'Social', icon: '🗣️' },
    { name: 'Technology', icon: '💻' },
  ];

  return (
    <SidebarTemplate 
      title="Buildings"
      options={buildingOptions}
      onClose={onClose}
      onSubItemClick={onSubItemClick}
      goBack={goBack}
    />
  );
};

export default BuildingSidebar;


