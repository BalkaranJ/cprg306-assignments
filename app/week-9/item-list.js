"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, setSelectedItem }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    if (sortBy === "quantity") return a.quantity - b.quantity;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Shopping List</h2>

      <div className="flex justify-center space-x-2 mb-4">
        {["name", "category", "quantity"].map((key) => (
          <button key={key} className={`px-4 py-2 rounded ${sortBy === key ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            onClick={() => setSortBy(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      <ul className="divide-y divide-gray-300">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} onSelectItem={setSelectedItem} />
        ))}
      </ul>
    </div>
  );
}
