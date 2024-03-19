"use client";

import Item from './item.js';
import { useState } from 'react';


export default function ItemList({items, onDelete, onItemSelect}) {
    
  const [sortBy, setSortBy] = useState('name');
 

  if (sortBy === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === 'category') {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  //create an array with all the categories
  let categories = items.map((item) => item.category);
  categories.sort();
  let uniqueCategories = [...new Set(categories)];
  categories = uniqueCategories;

  return (
    <main>
      
      <div className="p-2 m-2 mt-6 text-black">
        Sort By:
        <button className={"p-2 m-2 rounded-lg " + (sortBy === 'name' ? 'bg-black text-white' : 'bg-mute')} onClick={() => setSortBy('name')}>Name</button>
        <button className={"p-2 m-2 rounded-lg " + (sortBy === 'category' ? 'bg-black text-white' : 'bg-mute')} onClick={() => setSortBy('category')}>Category</button>
        <button className={"p-2 m-2 rounded-lg " + (sortBy === 'Group By Category' ? 'bg-black text-white' : 'bg-mute')} onClick={() => setSortBy('Group By Category')}>Grouped Category</button>
        <hr className='mt-2' />
      </div>
      
        <div className='p-2 m-2 text-black'>
          
          {sortBy !== 'Group By Category' ? 
            items.map((item) => (
              <ul key={item.id} >
                <li>
                <Item id={item.id} name={item.name} quantity={item.quantity} category={item.category} onDelete={onDelete} onSelect={onItemSelect} />
                </li>
              </ul>
            )) :
            categories.map((category, index) => (
              <ul key={index}>
                <li className="text-xl capitalize" >{category}</li>
                <li>
                  {(items.filter((item) => item.category === category)).sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
                    <ul key={item.id} >
                      <li>
                        <Item id={item.id} name={item.name} quantity={item.quantity} category={item.category} onDelete={onDelete} onSelect={onItemSelect} />
                      </li>
                    </ul>                    
                  ))}
                </li>
              </ul>
            ))}
        </div>

    </main>
  );
}