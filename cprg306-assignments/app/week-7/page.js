"use client"

import { useState } from "react";
import itemData from './items.json';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from "./meal-ideas";

export default function Page() {

    const [items, setItems] = useState(itemData);
    const [selectedItem, setSelectedItem] = useState(null);

    const testItems = [
      {
        "id": "1h2GJKH12gkHG31h1H",
        "name": "banana",
        "quantity": 1,
        "category": "dairy"
      },
      {
        "id": "2KJH3k2j3H1k2J3K1H",
        "name": "chicken",
        "quantity": 2,
        "category": "bakery"
      }
    ]

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
 
  return (
    <main className=' bg-slate'>
        <h1 className='text-3xl font-bold m-2 mt-0 text-black'>Shopping List</h1>
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