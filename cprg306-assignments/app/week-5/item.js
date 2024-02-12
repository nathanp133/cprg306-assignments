import React from 'react';


const Item = ({ name, quantity, category }) => {
  return (
    <li className="text-white-800 font-bold bg-gray-700 p-4 rounded-md mb-4">
      <p className="text-xl">{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
};

export default Item;

