import React, { useState } from 'react';
import DiningHallInfo from '../../data/details/DiningHallInfo.json';

const WSDSidebar = ({ onClose }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const WSDInfo = DiningHallInfo.WSD;

  return (
    <div className="fixed lg:top-[60px] lg:right-0 lg:w-[350px] bg-white shadow-2xl z-[1000] flex flex-col 
    bottom-0 right-0 lg:flex-row lg:flex-col lg:h-[calc(100%-60px)] w-full h-full p-6 rounded-lg border border-gray-200">
      <div className="w-full bg-blue-800 flex items-center justify-between px-4 py-3 text-white font-semibold relative rounded-t-lg">
        <div className="flex items-center">
          <span className="text-xl font-bold">{WSDInfo.title}</span>
          <div
            className="ml-2 relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
          >
            <span className="text-lg cursor-pointer text-gray-300 hover:text-gray-100">
              &#9432;
            </span>
            {showTooltip && (
              <div className="absolute bottom-full left-[-80px] mb-2 w-max bg-gray-800 text-white text-xs rounded p-2 shadow-lg">
                {WSDInfo.lastUpdated}
              </div>
            )}
          </div>
        </div>
        <button
          className="text-2xl font-bold text-white hover:text-gray-400 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        <div>
          <div className="text-lg font-semibold text-gray-800">Type:</div>
          <p className="text-gray-600">{WSDInfo.type}</p>
        </div>

        <div>
          <div className="text-lg font-semibold text-gray-800">Address:</div>
          <p className="text-gray-600">{WSDInfo.address}</p>
        </div>

        <div>
          <div className="text-lg font-semibold text-gray-800">Hours:</div>
          <ul className="space-y-1 ml-4 text-gray-600">
            {Object.entries(WSDInfo.hours).map(([day, hours]) => (
              <li key={day} className="text-sm">{`${day}: ${hours}`}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-lg font-semibold text-gray-800">Door Prices:</div>
          <ul className="space-y-1 ml-4 text-gray-600">
            {Object.entries(WSDInfo.doorPrices).map(([meal, price]) => (
              <li key={meal} className="text-sm">{`${meal}: ${price}`}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-lg font-semibold text-gray-800">Meal Periods:</div>
          <ul className="space-y-1 ml-4 text-gray-600">
            {Object.entries(WSDInfo.mealPeriods).map(([period, time]) => (
              <li key={period} className="text-sm">{`${period}: ${time}`}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-lg font-semibold text-gray-800">Website:</div>
          <p className="text-blue-500 hover:text-blue-700 underline">{WSDInfo.website}</p>
        </div>

        <div>
          <div className="text-lg font-semibold text-gray-800">Phone:</div>
          <p className="text-gray-600">{WSDInfo.phone}</p>
        </div>

        <div>
          <div className="text-lg font-semibold text-gray-800">Email:</div>
          <p className="text-gray-600">{WSDInfo.email}</p>
        </div>

        <div>
          <div className="text-lg font-semibold text-gray-800">Menu:</div>
          <p className="text-blue-500 hover:text-blue-700 underline">{WSDInfo.menu}</p>
        </div>
      </div>
    </div>
  );
};

export default WSDSidebar;
