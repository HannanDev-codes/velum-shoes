const categories = [
  { id: 'all', label: 'All Shoes' },
  { id: 'formal', label: 'Formal' },
  { id: 'casual', label: 'Casual' },
  { id: 'boots', label: 'Boots' },
];

const CategoryFilter = ({ selected, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-8 py-3.5 rounded-2xl font-medium text-sm transition-all duration-300 ${
            selected === cat.id
              ? 'bg-[#1a1a2e] text-white shadow-md'
              : 'bg-white border border-gray-300 hover:border-[#1a1a2e] hover:shadow'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;