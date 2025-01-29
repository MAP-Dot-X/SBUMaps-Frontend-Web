import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-lg shadow-sm px-2 py-1 w-full lg:w-[500px]"> {/* Add width classes here */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="flex-grow bg-transparent px-2 py-1 text-sm rounded-md border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-500"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 text-black rounded-full transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10 17a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
