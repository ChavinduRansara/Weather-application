import React, { useState } from 'react';

const SearchBar = () => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleAddCity = () => {
    // Add your logic here to add the city
    console.log(`Adding city: ${city}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-2 rounded-lg">
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={handleInputChange}
        className="px-4 py-2 rounded-lg text-white bg-[#1f2128] focus:outline-none w-full md:w-96" // Adjust the width
      />
      <button
        onClick={handleAddCity}
        className="mt-2 md:mt-0 md:ml-[-10px] px-4 py-2 rounded-lg text-white bg-[#6c5dd3] hover:bg-purple-600 focus:outline-none"
      >
        Add City
      </button>
    </div>
  );
};

export default SearchBar;
