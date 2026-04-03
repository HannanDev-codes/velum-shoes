// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a1f] text-gray-400 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="text-5xl font-serif tracking-widest text-[#d4af37] mb-6">VELUM</div>
            <p className="max-w-md text-lg leading-relaxed">
              Timeless leather footwear crafted by master artisans in Sialkot. 
              Where tradition meets modern elegance.
            </p>
            <div className="mt-8 flex gap-6">
              <div className="text-xs tracking-widest">HANDCRAFTED IN PAKISTAN</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white text-sm tracking-widest mb-6">EXPLORE</h4>
            <div className="space-y-4 text-sm">
              <Link to="/" className="block hover:text-white transition">Home</Link>
              <Link to="/shop" className="block hover:text-white transition">Shop Collection</Link>
              <Link to="/size-guide" className="block hover:text-white transition">Size Guide</Link>
              <Link to="/about" className="block hover:text-white transition">Our Story</Link>
            </div>
          </div>

          {/* Categories */}
          <div className="md:col-span-4">
            <h4 className="text-white text-sm tracking-widest mb-6">COLLECTIONS</h4>
            <div className="grid grid-cols-2 gap-y-4 text-sm">
              <Link to="/shop?category=formal" className="hover:text-white transition">Formal Shoes</Link>
              <Link to="/shop?category=wedding" className="hover:text-white transition">Wedding Shoes</Link>
              <Link to="/shop?category=casual" className="hover:text-white transition">Casual Shoes</Link>
              <Link to="/shop?category=boots" className="hover:text-white transition">Boots</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest">
          <div>© 2026 Velum Leathercraft. All Rights Reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-8">
            <span>Free Shipping Across Pakistan</span>
            <span>Cash on Delivery</span>
          </div>
          <div className="mt-4 md:mt-0">Made with Passion in Sialkot</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;