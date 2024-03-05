"use client"
import React from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {

  const [items, setItems] = React.useState(itemsData);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, newItem]);
  };






    return (
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </main>
    );
}
