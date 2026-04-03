// src/components/Navbar.jsx
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
    <nav className="bg-[#0a0a1f] text-white sticky top-0 z-50 border-b border-[#d4af37]/10">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="text-4xl font-serif tracking-[4px] text-[#d4af37] group-hover:text-amber-300 transition">VELUM</div>
          <div className="text-[10px] text-gray-400 tracking-widest font-light">EST 2024 • SIALKOT</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest font-medium">
          <Link to="/" className="hover:text-[#d4af37] transition">Home</Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-2 hover:text-[#d4af37] transition"
            >
              CATEGORIES
              <ChevronDown size={18} className={`transition ${isCategoriesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCategoriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white text-[#0a0a1f] rounded-3xl shadow-2xl py-6 z-50 border border-[#d4af37]/10">
                <div className="px-8 space-y-4">
                  {categories.map((cat, index) => (
                    <Link
                      key={index}
                      to={cat.path}
                      className="block py-2 text-lg hover:text-[#d4af37] transition font-light"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-[#d4af37] transition">ABOUT</Link>
        </div>

        {/* Cart */}
        <Link 
          to="/cart"
          className="flex items-center gap-3 group"
        >
          <div className="text-sm font-medium tracking-wider group-hover:text-[#d4af37] transition">CART</div>
          <div className="relative">
            <ShoppingBag size={26} className="group-hover:text-[#d4af37] transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#d4af37] text-[#0a0a1f] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ring-2 ring-[#0a0a1f]">
                {totalItems}
              </span>
            )}
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)} 
          className="md:hidden p-2"
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0a0a1f] border-t border-[#d4af37]/10 px-8 py-8">
          <div className="flex flex-col gap-6 text-lg">
            <Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link>
            
            <div>
              <p className="text-[#d4af37] text-sm mb-4 tracking-widest">CATEGORIES</p>
              {categories.map((cat, i) => (
                <Link 
                  key={i}
                  to={cat.path} 
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-3"
                >
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