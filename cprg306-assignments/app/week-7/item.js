"use client";

import { useState } from "react";
const Item = ({id, name, quantity, category, onDelete, onSelect}) => {
  
  const [visibility, setVisibility] = useState("invisible");
  const [itemBg, setItemBg] = useState("bg-mute");

  const handleMouseEnter = () => {
    setVisibility("visible");
    setItemBg("bg-black text-white");
  }

  const handleMouseLeave = () => {
    setVisibility("invisible");
    setItemBg("bg-mute");
  }

  return (
    <main className="text-black">
      <div className="max-w-96 " onClick={() => onSelect(id)}> 
        <ul className={"p-2.5 m-4 w-96 border-2 border-black border-opacity-50 cursor-pointer " +itemBg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className={"float-right relative left-1 bottom-2 font-extralight text-xs  pl-2 pb-2 "+visibility} onClick={() => onDelete(id)}>x</button>
          <li className="text-xl font-bold">{name}</li>
          <li className="text-sm">Buy {quantity} in {category}</li>
        </ul>
      </div>
    </main>
  );
}

export default Item;

