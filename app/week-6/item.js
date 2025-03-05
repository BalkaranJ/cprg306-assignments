const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between items-center p-4 border-b border-gray-300 rounded-lg shadow-sm">
            <div>
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm text-gray-500">Category: {category}</p>
            </div>
            <span className="text-blue-600 font-medium">{quantity}</span>
        </li>
    );
};

export default Item;
