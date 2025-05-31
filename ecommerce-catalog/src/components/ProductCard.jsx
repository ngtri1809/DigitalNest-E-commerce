import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-contain"
      />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <Link 
        to={`/product/${product.id}`}
        className="mt-2 inline-block text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}