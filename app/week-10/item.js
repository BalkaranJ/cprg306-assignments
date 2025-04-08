export default function Item({ name, quantity, category, onSelectItem }) {
    return (
      <li 
        className="flex justify-between items-center p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
        onClick={() => onSelectItem(name)}
      >
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-500">Category: {category}</p>
        </div>
        <span className="text-blue-600 font-medium">{quantity}</span>
      </li>
    );
  }
  