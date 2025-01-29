import React, { useState } from 'react';

const AthleticSidebar = ({ onClose, onSubItemClick, goBack }) => {
  const [activeSubItem, setActiveSubItem] = useState(null);

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
    <div className="fixed lg:top-[60px] lg:left-[100px] lg:h-[calc(100%-60px)] lg:w-[350px] bg-white shadow-lg z-[1000] flex flex-col bottom-0 left-0 lg:h-[calc(100%-60px)] w-full h-[400px]">
      {/* Header */}
      <div className="w-full h-[50px] bg-black flex items-center justify-between px-4 text-white font-bold">
        <button
          className="text-xl font-bold text-white hover:text-gray-400 transition-colors flex items-center"
          onClick={goBack}
        >
          <span className="mr-2">&#8592;</span>
        </button>
        <span className='text-xl'>Athletics</span>
        <button
          className="text-2xl font-bold text-white hover:text-gray-400 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <ul className="grid grid-cols-2 gap-4 p-4">
        {buildingOptions.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm cursor-pointer transition-transform ease-in-out duration-300 ${
              activeSubItem === item.name
                ? 'bg-blue-600 text-white'
                : 'hover:bg-blue-600 hover:text-white hover:scale-105'
            }`}
            onClick={() => {
              setActiveSubItem(item.name);
              onSubItemClick(item.name);
            }}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <span className="text-sm font-bold">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AthleticSidebar;
