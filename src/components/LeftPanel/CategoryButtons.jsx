// components/Buttons.js
import React from 'react';

const CategoryButtons = ({ label, active, onClick }) => {
  const baseClasses = 'rounded-full font-light px-1 text-gray-600 hover:bg-white hover:text-black transition duration-300 focus:outline-none';
  const activeClasses = 'bg-white text-black';

  return (
    <button
      className={`${baseClasses} ${active ? activeClasses : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CategoryButtons;
