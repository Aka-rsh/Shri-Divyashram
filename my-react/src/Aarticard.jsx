import React from 'react';
import { Link } from 'react-router-dom';

const Aarticard = ({ name, title, img, subtitle, link }) => {
  return (
    <Link to={link}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer max-w-sm">
        <img src={img} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-orange-700">{title}</h2>
          <h3 className="text-md text-gray-600 mb-2">{name}</h3>
          <p className="text-sm text-gray-700">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default Aarticard;
