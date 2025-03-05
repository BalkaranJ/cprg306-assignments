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
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  }

  return (
      <div className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-center">Add a New Item</h2>
  
        <form 
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Item Name Input */}
          <label className="text-left font-medium">Name:</label>
          <input
            type="text"
            placeholder="Enter item name"
            className="border p-2 rounded w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          {/* Quantity Controls */}
          <label className="text-left font-medium">Quantity:</label>
          <div className="flex items-center space-x-4">
            <button
              type="button"
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
  
            <span className="text-lg font-semibold w-10 text-center">{quantity}</span>
  
            <button
              type="button"
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
  
          {/* Category Selection */}
          <label className="text-left font-medium">Category:</label>
          <select 
            className="border p-2 rounded w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
  
          {/* Submit Button */}
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-95 w-full"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  

}


