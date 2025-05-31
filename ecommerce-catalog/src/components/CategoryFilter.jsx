// src/components/CategoryFilter.jsx
export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
    return (
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="font-medium">Filter by:</span>
          
          <button
            onClick={() => onSelect('')}
            className={`px-4 py-2 rounded-full text-sm ${
              !selectedCategory 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }