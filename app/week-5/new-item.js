"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

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
    </div>
  );
}


