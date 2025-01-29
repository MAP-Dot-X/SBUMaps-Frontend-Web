// src/components/Sidebar.js
import React, { useState } from 'react';
import SidebarManager from '../sidebarManagers/SidebarManager';
import RecentSidebar from './RecentSidebar';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [subSidebar, setSubSidebar] = useState('');
  const [recentSidebar, setRecentSidebar] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
    setSubSidebar('');
  };

  const handleExploreOptionClick = (option) => {
    setSubSidebar(option.toLowerCase());

    // Update recentSidebar with the new sidebar info
    setRecentSidebar({
      name: option, // Store the name of the recent sidebar
      lastOpened: new Date().toLocaleString(), // Store timestamp when opened
    });
  };

  return (
    <div className="fixed z-[1000] bg-black shadow-lg flex flex-col items-center gap-3 lg:top-[60px] lg:left-0 lg:w-[100px] lg:h-[calc(100%-60px)] bottom-0 left-0 w-full h-[80px] flex-row">
      <ul className="list-none flex lg:flex-col w-full justify-center lg:justify-start">
        {['Explore', 'Events', 'Recent'].map((item, index) => (
          <li
            key={index}
            className={`w-full h-[80px] lg:h-auto lg:w-[100px] flex flex-col items-center justify-center text-white bg-black py-4 text-xs font-bold cursor-pointer transition-all ease-in-out duration-300 border-transparent ${
              activeItem === index
                ? 'bg-blue-600 text-white border-l-4 border-white'
                : 'hover:bg-blue-600 hover:scale-104 hover:border-l-4 hover:border-white'
            }`}
            onClick={() => handleItemClick(index)}
          >
            {/* Add emojis above the text */}
            <div className="text-2xl">
              {index === 0 ? '🌍' : index === 1 ? '📅' : '🕒'}
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {activeItem === 0 && (
        <SidebarManager
          subSidebar={subSidebar}
          onOptionClick={handleExploreOptionClick}
          onClose={() => setActiveItem(null)}
        />
      )}

      {activeItem === 1 && (
        <div className="flex-1 w-full flex items-center justify-center text-white">
          <p>Events content goes here.</p>
        </div>
      )}

      {activeItem === 2 && (
        <RecentSidebar recentSidebar={recentSidebar} onClose={() => setActiveItem(null)} />
      )}
    </div>
  );
};

export default Sidebar;
