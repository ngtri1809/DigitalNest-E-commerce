// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import CategoryFilter from '../components/CategoryFilter';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchProducts();
        setProducts(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
        
        setIsLoading(false);
      } catch (error) {
        setError('Failed to load products. Please try again later.');
        setIsLoading(false);
        console.error('Fetch error:', error);
      }
    };
    getProducts();
  }, []);

  // Filter products by category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  if (isLoading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-8">
          <p>No products found in this category</p>
          <button 
            onClick={() => setSelectedCategory('')}
            className="mt-4 text-indigo-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}