export default function CategoryFilter({ categories, onSelect }) {
    return (
      <div className="mb-6">
        <select 
          onChange={(e) => onSelect(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }