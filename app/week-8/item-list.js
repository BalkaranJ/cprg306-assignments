"use client";

import { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name"); // Default sorting by name


  // Sorting function
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    if (sortBy === "quantity") return a.quantity - b.quantity;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Shopping List</h2>

      {/* Sorting Buttons */}
      <div className="flex justify-center space-x-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
        <button
          className={`px-4 py-2 rounded ${sortBy === "quantity" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setSortBy("quantity")}
        >
          Quantity
        </button>
      </div>

      {/* Render Items */}
      <ul className="divide-y divide-gray-300">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
