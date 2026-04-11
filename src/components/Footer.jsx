import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a1f] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-5xl font-bold text-[#d4af37] mb-4 tracking-widest">VELUM</div>
        <p className="max-w-md mx-auto mb-8">
          Premium leather shoes handcrafted in Sialkot, Pakistan.<br />
          Perfect fit with half sizes.
        </p>
        <div className="text-sm">
          Free Delivery Across Pakistan • Cash on Delivery Available
        </div>
        <div className="mt-12 text-xs text-gray-500">
          © 2026 Velum Shoes. Made with passion in Sialkot.
        </div>
      </div>
    </footer>
  );
};

export default Footer;