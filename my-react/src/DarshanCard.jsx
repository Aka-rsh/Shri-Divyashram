import React from 'react';

const DarshanCard = ({ imageUrl, templeName, location, description }) => {
  if (!imageUrl || !templeName) return null; // Avoid rendering broken cards

  return (
    <div className="border-2 border-amber-500 max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={imageUrl}
          alt={templeName}
          className="w-full h-48 object-cover rounded-t-lg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{templeName}</h3>
        <h4 className="text-sm text-gray-600">{location || 'Location not available'}</h4>
        <p className="mt-2 text-gray-700 text-justify">{description || 'No description available.'}</p>
      </div>
    </div>
  );
};


export default DarshanCard;




