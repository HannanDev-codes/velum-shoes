import { useState } from 'react';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const { totalItems } = useCart();

  const categories = [
    { name: "Formal Shoes", path: "/shop?category=formal" },
    { name: "Wedding Shoes", path: "/shop?category=wedding" },
    { name: "Casual Shoes", path: "/shop?category=casual" },
    { name: "Boots", path: "/shop?category=boots" },
  ];

  return (
    <nav className="bg-[#0a0a1f] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold tracking-widest text-[#d4af37]">VELUM</Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link to="/" className="hover:text-[#d4af37] transition">Home</Link>

          <div className="relative">
            <button 
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-1 hover:text-[#d4af37] transition"
            >
              Categories <ChevronDown size={18} />
            </button>

            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-white text-[#0a0a1f] rounded-3xl shadow-xl py-5 z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    className="block px-6 py-3 hover:bg-gray-100"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-[#d4af37] transition">About</Link>
        </div>

        <Link to="/cart" className="flex items-center gap-3 hover:text-[#d4af37] transition">
          <span className="font-medium">Cart</span>
          <div className="relative">
            <ShoppingBag size={26} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#d4af37] text-[#0a0a1f] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </Link>

        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-2">
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-[#0a0a1f] px-8 py-6 border-t border-gray-700">
          <div className="flex flex-col gap-6 text-base">
            <Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link>
            <div>
              <p className="text-[#d4af37] mb-3">Categories</p>
              {categories.map(cat => (
                <Link key={cat.name} to={cat.path} onClick={() => setIsMobileOpen(false)} className="block py-2">
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link to="/about" onClick={() => setIsMobileOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;