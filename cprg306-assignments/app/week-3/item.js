import React from 'react';


const Item = ({ name, quantity, category }) => {
  return (
    <li className="text-white-800 font-bold  ">
      <p>{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
};

export default Item;

