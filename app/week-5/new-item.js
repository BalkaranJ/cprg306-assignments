"use client";

import { useState } from "react";

export default function NewItem() {

  //Initializing State Variables
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('produce');

  const increment = () => {
    setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  //handleSubmit function which will manage form submissions
  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category};
    console.log(item);
    alert('Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}');
    setName('');
    setQuantity(1);
    setCategory('produce');
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Add a New Item</h2>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-md text-white font-medium transition ${
            quantity === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 active:scale-95"
          }`}
        >
          −
        </button>

        <span className="text-lg font-semibold w-10">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-md text-white font-medium transition ${
            quantity === 20
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 active:scale-95"
          }`}
        >
          +
        </button>
      </div>

      <select value={category} onChange={(e) => setCategory (e.target.value)}className="border p-2 rounded w-full">
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="meat">Meat</option>
        <option value="bread">Bread</option>
        <option value="canned">Canned</option>
        <option value="frozen">Frozen</option>
        <option value="snacks">Snacks</option>
        <option value="beverages">Beverages</option>
        <option value="household">Household</option>
        <option value="other">Personal</option>
      </select>

        <button className="bg-blue-500 text-white px-4 y-2 rounded hover:bg-blue-600 active:scale-95">
          Add Item
        </button>
    </div>
  );
}


