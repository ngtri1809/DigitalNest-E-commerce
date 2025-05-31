// src/components/ProductCard.jsx
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click event from firing
    addToCart(product);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className="overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="mb-2">
        <span className="text-xs uppercase text-gray-500 font-medium">
          {product.category}
        </span>
        <h3 className="font-semibold text-lg group-hover:text-indigo-600">
          {product.name}
        </h3>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</p>
        
        <button
          onClick={handleAddToCart}
          className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-sm hover:bg-indigo-200 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}