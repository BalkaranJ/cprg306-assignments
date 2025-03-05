"use client";

import { useState, useEffect } from "react";
import Item from "./item";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("name"); // Default sorting by name

  useEffect(() => {
    // Dynamically import JSON file
    import("./items.json")
      .then((data) => setItems(data.default))
      .catch((error) => console.error("Error loading items:", error));
  }, []);

  // Sorting function
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    if (sortBy === "quantity") return a.quantity - b.quantity;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Shopping List</h2>

      {/* Sorting Dropdown */}
      <label className="text-left font-medium">Sort By:</label>
      <select
        className="border p-2 rounded w-full mb-4"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="name">Name</option>
        <option value="category">Category</option>
        <option value="quantity">Quantity</option>
      </select>

      {/* Render Items */}
      <ul className="divide-y divide-gray-300">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
