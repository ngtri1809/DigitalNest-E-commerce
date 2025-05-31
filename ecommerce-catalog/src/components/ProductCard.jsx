import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-contain"
      />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <div className="flex justify-between mt-4">
        <Link 
          to={`/product/${product.id}`}
          className="text-indigo-600 hover:underline"
        >
          Details
        </Link>
        
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}