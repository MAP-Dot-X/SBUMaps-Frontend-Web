// src/components/RecentSidebar.js
import React from 'react';

const RecentSidebar = ({ recentSidebar, onClose }) => {
  return (
    <div className="fixed lg:top-[60px] lg:left-[100px] lg:h-[calc(100%-60px)] lg:w-[350px] bg-white shadow-lg z-[1000] flex flex-col 
      bottom-0 left-0 lg:h-[calc(100%-60px)] w-full h-[300px]">
      {/* Header */}
      <div className="w-full h-[60px] bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-between px-4 text-white">
        <span className="text-xl">Recent Sidebars</span>
        <button
          className="text-2xl font-bold text-white hover:text-gray-400 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      <div className="p-4 text-black">
        {/* Display default message if there's no recent sidebar */}
        {recentSidebar ? (
          <>
            <p>{`Sidebar: ${recentSidebar.name}`}</p>
            <p>{`Last Opened: ${recentSidebar.lastOpened}`}</p>
          </>
        ) : (
          <p>No recent sidebar available.</p>
        )}
      </div>
    </div>
  );
};

export default RecentSidebar;
