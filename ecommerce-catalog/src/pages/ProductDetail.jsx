// src/pages/ProductDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProductById } from '../services/api';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    getProduct();
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  if (!product) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-1" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
            clipRule="evenodd" 
          />
        </svg>
        Back to Products
      </button>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-8">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full rounded-lg shadow-md"
        />
        
        <div>
          <span className="text-sm uppercase text-gray-500 font-medium">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold mt-1 mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}