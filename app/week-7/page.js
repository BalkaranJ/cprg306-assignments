"use client";

import { useState } from "react";
import NewItem from "./new-item";
import Link from "next/link";
import ItemList from "./item-list";
import itemsData from "./items-data";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    //Function to add a new item to the list
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, { id: prevItems.length + 1, ...newItem }]);
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
        </main>
      );
}