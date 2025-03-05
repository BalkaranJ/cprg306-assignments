import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add a New Item</h1>
        <NewItem />
        </main>
    );
}
