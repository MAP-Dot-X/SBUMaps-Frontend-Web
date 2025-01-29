import React from 'react';

const ExploreSidebar = ({ onClose, onOptionClick }) => {
  const options = [
    { name: 'Buildings', icon: '🏢' },
    { name: 'Food', icon: '🍴' },
    { name: 'Transportation', icon: '🚌' },
    { name: 'Restroom', icon: '🚻' },
    { name: 'Athletics', icon: '🏅' },
    { name: 'Entrances', icon: '🚪' },
  ];

  return (
    <div className="fixed lg:top-[60px] lg:left-[100px] lg:h-[calc(100%-60px)] lg:w-[350px] bg-white shadow-lg z-[1000] flex flex-col 
      bottom-0 left-0 lg:h-[calc(100%-60px)] w-full h-[400px]">
      {/* Header */}
      <div className="w-full h-[50px] bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-between px-4 text-white">
        <span className="text-xl">Explore Options</span>
        <button
          className="text-2xl font-bold text-white hover:text-gray-400 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      {/* Body */}
      <ul className="p-4 grid grid-cols-2 gap-4 overflow-y-auto">
        {options.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center p-4 text-black text-sm font-bold bg-gray-100 rounded-lg shadow-sm cursor-pointer transition-transform ease-in-out duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
            onClick={() => onOptionClick(item.name)}
          >
            <span className="text-2xl mb-2">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreSidebar;
