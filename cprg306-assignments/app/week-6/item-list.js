"use client"
import React, { useState } from 'react';
import Item from './item';


function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "groupCategory") {
      return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category.toLowerCase();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const handleGroupByCategory = () => {
    setSortBy("groupCategory");
  };

  return (
    <div>
      <div>
        <label htmlFor="sort">Sort by: </label>
        <button
          onClick={() => setSortBy('name')}
          className={`p-1 m-2 w-28 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`p-1 m-2 w-28 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Category
        </button>
        <button
          onClick={handleGroupByCategory}
          className={`p-1 m-2 w-28 ${sortBy === 'groupCategory' ? 'bg-orange-500' : 'bg-orange-700'}`}
        >
          Group Category
        </button>
      </div>

      <div>
        <ul className='bg-slate-900 p-2 m-4 max-w-sm grid grid-cols-1 gap-4'>
          {sortBy === 'groupCategory'
            ? Object.keys(groupedItems).map(category => (
              <li key={category}>
                <h2 className="text-lg font-semibold capitalize">{category}</h2>
                {groupedItems[category].map(item => (
                  <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
              </li>
            ))
            : sortedItems.map(item => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;