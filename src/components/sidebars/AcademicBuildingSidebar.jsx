import React, { useState } from 'react';
import { useToggleAcademicBuildings } from '../../hooks/useToggleAcademicBuildings';

const AcademicBuildingSidebar = ({ onClose, onOptionClick, goBack }) => {
  const [toggleStates, handleToggleChange] = useToggleAcademicBuildings();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBuildings = Object.keys(toggleStates).filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemClick = (item) => {
    console.log(`Opening sidebar for: ${item}`);
    onOptionClick(item);
  };

  const handleToggleClick = (e, item) => {
    e.stopPropagation();
    handleToggleChange(item);
  };

  return (
    <div className="fixed lg:top-[60px] lg:left-[100px] lg:h-[calc(100%-60px)] lg:w-[350px] bg-white shadow-lg z-[1000] flex flex-col bottom-0 left-0 lg:h-[calc(100%-60px)] w-full h-[400px]">
      {/* Header */}
      <div className="w-full h-[50px] bg-black flex items-center justify-between px-4 text-white font-bold">
        <button
          className="text-lg font-bold text-white hover:text-gray-400 transition-colors flex items-center"
          onClick={goBack}
        >
          <span className="mr-2">&#8592;</span>
        </button>
        <span className="text-xl">Academic Buildings</span>
        <button
          className="text-2xl font-bold text-white hover:text-gray-400 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      {/* Search Input */}
      <div className="p-2 border-b border-gray-300">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Body */}
      <ul className="p-4 grid grid-cols-1 gap-4 overflow-y-auto max-h-[calc(100%-110px)]">
        {filteredBuildings.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-4 border rounded-lg shadow-sm cursor-pointer transition-transform ease-in-out duration-300 ${
              toggleStates[item]
                ? 'bg-blue-800 text-white'
                : 'hover:bg-blue-800 hover:text-white hover:scale-105'
            }`}
            onClick={() => handleItemClick(item)}
          >
            {/* Item Name */}
            <span className="font-bold text-md">{item}</span>
            {/* Toggle Switch */}
            <div
              className={`relative inline-block w-12 h-6 cursor-pointer transition-all duration-300 rounded-full ${
                toggleStates[item] ? 'bg-green-500' : 'bg-gray-400'
              }`}
              onClick={(e) => handleToggleClick(e, item)}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  toggleStates[item] ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcademicBuildingSidebar;
