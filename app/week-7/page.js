import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping List</h1>
            <ItemList />
        </main>
    );
}