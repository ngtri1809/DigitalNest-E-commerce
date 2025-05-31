// src/pages/ProductDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProductById } from '../services/api';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
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

  if (!product) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full rounded-lg shadow-md"
        />
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-indigo-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}