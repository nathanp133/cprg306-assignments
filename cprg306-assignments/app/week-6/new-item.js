"use client"
import React, { useState } from 'react';

function MyComponent({ onAddItem}) {
    const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

    return (
        <main className='flex justify-start'>
            <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                <div className="mb-2">
                    <label htmlFor="name" className="block"></label>
                    <input
                        type="text"
                        placeholder='Item name'
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    />
                </div>
                <div className="flex">
                    <div className="w-1/4 mr-1">
                        <label htmlFor="quantity" className="block"></label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={(event) => setQuantity(Number(event.target.value))}
                            required
                            className="w-full border-2 border-gray-300 p-2 rounded-lg font-sans"
                        />
                    </div>
                    <div className="w-80 ml-1 pl-40 flex justify-end">
                        <label htmlFor="category" className="block"></label>
                        <select
                            id="category"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                            className="w-full border-2 border-gray-300 p-2 rounded-lg font-sans"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen">Frozen Foods</option>
                            <option value="canned">Canned Goods</option>
                            <option value="dry">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    +
                </button>
            </form>
        </main>
    );
}

export default MyComponent;