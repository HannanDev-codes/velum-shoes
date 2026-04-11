const categories = [
  { id: 'all', label: 'All Shoes' },
  { id: 'formal', label: 'Formal' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'casual', label: 'Casual' },
  { id: 'boots', label: 'Boots' },
];

const CategoryFilter = ({ selected, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-8 py-4 rounded-2xl font-medium transition-all ${
            selected === cat.id 
              ? 'bg-velvet text-white shadow-lg' 
              : 'bg-white border border-gray-300 hover:border-velvet'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;