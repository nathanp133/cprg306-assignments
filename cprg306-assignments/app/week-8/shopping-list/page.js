"use client"

import React from "react";
import { useState } from "react";
import itemData from './items.json';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

function Page() {

    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState(null);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }

    const handleItemSelect = (id) => {
        let itemBuffer = items.find((item) => item.id === id).name;
        if (itemBuffer.includes(",")) 
        {
            itemBuffer = itemBuffer.split(",")[0];
        }
        itemBuffer = itemBuffer.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g , '');
        itemBuffer = itemBuffer.trim();
        setSelectedItem(itemBuffer);
      }

  if (!user)
  {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className=" bg-slate text-black p-8 rounded-lg w-1/6  flex-rows text-center">
          <Link className="font-semibold text-xl cursor-pointer hover:underline" href="../week-8">Click here to Login</Link>
        </div>
    </main>      
    );
  }
 
  return (
    <main className=' bg-slate'>
      <div className="flex justify-between">
      <h1 className='text-3xl font-bold m-2 mt-0 text-black'>Shopping List</h1>
      <button className=" text-white bg-black rounded-lg p-2 m-4 cursor:pointer" onClick={firebaseSignOut}>Sign Out</button>
      </div>
        <div className="text-black flex">
          <div className="flex-1 max-w-md">
            <NewItem onAddItem={addItem}/>
            <ItemList items={items} onDelete={deleteItem} onItemSelect={handleItemSelect}/>
          </div>
          <div className="flex-1 max-w-md">
            <MealIdeas ingredient={selectedItem} />
          </div>
        </div>
        
    </main>
    
  );
}
export default Page;